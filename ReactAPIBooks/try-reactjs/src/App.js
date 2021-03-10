import { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import PostList from './posts/PostList';
import { render } from '@testing-library/react';


import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';



class App extends Component {
  
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









  render() {
    var {isLoaded ,items }=this.state;
    if(!isLoaded){
      return <div>is Loading.......</div>
    }
    else{
      return(
        <div className="App">
          

{/* <li key={items._id}>
                ID : {items._id} |  
                Author : {items.Author} |  
                Title : {items.Title} |  
                Series_Title : {items.Series_Title} | 
                Language : {items.Language} | 
                Subject : {items.Subject} | 
                Category : {items.Category} | 
                Release_Date : {items.Release_Date} | 
                Copyright_Status : {items.Copyright_Status} | 
                <img src={items.image_url} />  |  
                read_url : {items.read_url}

              </li> */}
          
            {items.slice(0,2).map(items=>(

                <MDBRow>
                <MDBCol style={{ maxWidth: "40rem" }}>
                  <MDBCard reverse>
                    <MDBCardImage cascade style={{ height: '20rem' }} src={items.image_url} />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>Author : {items.Author}</MDBCardTitle>
                      <h5 className="indigo-text"><strong>Title : {items.Title}</strong></h5>
                    
                      <a href="#!" className="icons-sm li-ic ml-1">
                        <MDBIcon fab icon="linkedin-in" /></a>
                      <a href="#!" className="icons-sm tw-ic ml-1">
                        <MDBIcon fab icon="twitter" /></a>
                      <a href="#!" className="icons-sm fb-ic ml-1">
                        <MDBIcon fab icon="facebook-f" /></a>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                </MDBRow>
              
              

            ))}
          
        </div>
      )
    }
    
  }
  }
  


export default App;
