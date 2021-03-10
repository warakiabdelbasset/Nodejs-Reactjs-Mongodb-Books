import React, { Component } from "react"
import Card from './CardUI'

import img2 from '../assets/me.png'
import img3 from '../assets/me2.jpg'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
  } from '../Footer/Footer.elements';
import './card-style.css'
import Navbar from "../Navbar/Navbar";

class Cards extends Component{
    constructor(props){
        super(props);
        this.state={
          items:[],
          isLoaded : false,
        }
      }
      //https://jsonplaceholder.typicode.com/users
      componentDidMount(){
        fetch('http://localhost:3000/Books')
        .then(res=>res.json())
        .then(json=>{
          this.setState({
            isLoaded : true,
            items : json,
          })
        })
      }


    render(){
        var {isLoaded ,items }=this.state;
    if(!isLoaded){
      return <div>is Loading.......</div>
    }
    else{
        return(
            <div >
                <nav><div to='/' style={{
          fontSize:'30px',
          color:"grey",
          marginLeft:"120px",
          marginBottom:"-30px",
          marginTop:"20px"
      }}>
           TRENDING BOOKS  
      </div></nav>
    <div className="container-fluid d-flex justify-content-center">
        
    <div className="row" >
      {items.slice(0,8).map(items=>(  
                    <div className="col-md-3">
                        <Card  
                        title={items.Author} 
                        description={items.Title} 
                        Series_Title={items.Series_Title}
                        Language ={items.Language}
                        Subject = {items.Subject}
                        Category = {items.Category}
                        Release_Date= {items.Release_Date}
                        imgfront={items.image_url}>
                            </Card>
                    </div>         
      ))
      
      }         
          </div>        
           </div> 
           </div>
            
        );
        
    }
}
}
export default Cards;
