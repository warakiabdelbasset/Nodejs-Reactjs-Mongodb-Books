import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './card-style.css'
import img1 from '../assets/m.png'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Blur from 'react-blur'
import { Container, Button } from '../globalStyles';
import './card-style.css'
import { Link } from 'react-router-dom';
const font =  "'Quicksand', sans-serif";

const Card= props=>{
  
    return(
      
        <Flippy
        flipOnHover={true} // default false
        flipDirection="horizontal" // horizontal or vertical
         // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        /// these are optional style, it is not necessary
        
      >
        
        <FrontSide className='a' style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        transition : ' 2s ,  1s ',
        width:'min-content',
        boxShadow: 'none',
        backgroudColor:'red'
        
      }}>
            
            <div className="card text-center" >
            <div className="overflow">
                <img src={props.imgfront} alt="image1" className="card-img-top"></img>
            </div>
            
        </div>                    
        </FrontSide>
       
        <BackSide style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        transition : ' 2s ,  1s ',
        width:'min-content',
        boxShadow: "none",
        fontFamilly:{font}
      
        
      }}>
       <div className="card text-center" style={{
         //backgroundImage: `url(${props.imgfront})`,
         backgroundColor:'#A9A9A9',
         backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  
  
  

           //backgroundColor:'red',
           
          // blurRadius:'5',
          // filter: 'blur(3px)'
       }}>
          <div className="card-header" style={{
                  backdropFilter:'blur(8px)',
                  fontSize:'1vw',fontFamily:'cursive',fontWeight: 'bold'}}>
                 {props.title}</div>
         
            <div className="overflow"style={{backdropFilter:'blur(20px)',
          width:'100%',
          height:'91%',
          
          
          color:'black',
          
          
          
          }}>
              
              
                
              
                 <div style={{position:'relative'}} >
               <div style={{textAlign:'center'}}>------------------------------------</div>
                <h5 className="description">The Project Gutenberg EBook of The Military Adventures of Johnny Newcome, by 
David Roberts

This eBook is for the use of anyone anywhere at no cost and with
almost no restrictions whatsoever.  You may copy it, give it away or
re-use it under the terms of the Project Gutenberg License included
with this eBook or online at www.gutenberg.org</h5>
                <div style={{textAlign:'center'}}>------------------------------------</div>
                <h6 className="">{props.Release_Date}</h6>
            </div>
            
            </div>
            
                  <a  href='#'>
            <div  className="card-footer " style={{
                  backdropFilter:'blur(8px)',
                  position:'relative',
                  
                }}>
                See more
                </div>
                </a> 
        </div>                   
        </BackSide>
        
      </Flippy>
    );
}
        
        
 

export default Card;