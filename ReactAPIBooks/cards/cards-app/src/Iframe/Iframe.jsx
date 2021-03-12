import React, { Component } from "react"
import Iframe from 'react-iframe';


class Iframee extends Component{
    render(){
    return (
      <>
       
        <Iframe url="https://cdn.flipsnack.com/widget/v2/widget.html?hash=tp3qnucbdc&t=1615480748" allowFullScreen
        width="100%"
        height="500px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
          
       
      </>
    );
    }
  }

export default Iframee;





