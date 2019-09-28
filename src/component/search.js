import React,{Component} from 'react';
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import ImageResult from "./imageresult";
import * as dotenv from "dotenv";
dotenv.config();

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:"",
            amount:15,
            images: []
        };
        this.onTextChange=this.onTextChange.bind(this);
       
    }
    
    onTextChange (e) {
        this.setState({
         searchText:e.target.value },()=>{
             fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
             .then(res=>res.json()).then(data=>{this.setState({images:data.hits})
            console.log(data.hits)})
         })
    }
    onChangeAmount = (e,index,value)=>{
        console.log(value)
        this.setState({
            amount:value
        })
    }
    render(){

    return (
        <div>
           <TextField 
           name="searchText"
           value={this.state.searchText}
           onChange={this.onTextChange}
           floatingLabelText="Search for Images"
           fullWidth={true}/>

            <SelectField 
            name="amount"
            value={this.state.amount}
            onChange={this.onChangeAmount}
            floatingLabelText="Amount"
            >
            <MenuItem value={5} primaryText="5"/>
            <MenuItem value={10} primaryText="10"/>
            <MenuItem value={15} primaryText="15"/>
            <MenuItem value={25} primaryText="25"/>
            <MenuItem value={50} primaryText="50"/>
            </SelectField>
            {<ImageResult array={this.state.images}/>}
        </div>
    )
}
}
