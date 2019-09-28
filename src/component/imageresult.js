import React,{Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Dialog from "./dialog";

 class ImageResult extends Component {
    constructor(props){
        super(props);
        this.state={
          currentimage:"",
          show:false
        }
        this.opendialog=this.opendialog.bind(this);
        this.closeimage=this.closeimage.bind(this);
    }
    opendialog(img){
      console.log(img)
        let getimage=img;
      this.setState({
        currentimage:getimage,
        show:true
      })
    }
    closeimage(){
      this.setState({
        show:false
      })
    }
    render(){

      console.log(this.state.currentimage)

  return (
 
    <div >
      <GridList cellHeight={280}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {this.props.array.map(item => (
          <GridListTile key={item.id}>
            <img src={item.largeImageURL} alt={item.tags} width="300px" />
            <GridListTileBar
              title={item.tags}
              subtitle={<span>by: {item.user}</span>}
              actionIcon={
                <IconButton style={{color:"white"}}  onClick={()=>this.opendialog(item.largeImageURL)}>
                <Icon color="action" style={{color:"white"}}>
                      O
                     </Icon>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      {(this.state.show)?<Dialog img={this.state.currentimage} close={this.closeimage}/>:null}
    </div>
  );
}
}
export default ImageResult;