import React from 'react'

export default function Dialog(props) {
    console.log(props)
    return (
        <div style={{width:"90vw",height:"90vh", position:"fixed",top:"5vw",left:"5vh",zIndex:"22",display:"flex",justifyContent:"center"}}>
        <img src={props.img} style={{border:"2px solid white",boxShadow:"5px 5px 20px black"}} alt="Image1" width="95%" height="90%" />
        <button onClick={props.close} style={{position:"absolute",color:"white",background:"black",top:"5%",right:"5%",zIndex:"22"}}>X</button>
      </div>
    )
}
