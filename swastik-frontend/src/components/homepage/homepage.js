import React, { useState } from "react"
import "./homepage.css"
import Logo from '../../images/logo.jpg';
import LImage from '../../images/image2.jfif';
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import image1 from '../../images/image1.jfif';
import { useHistory } from "react-router-dom"
const Homepage = ({setLoginUser}) => {
    return (
        <div>
    <br/>
      <div style={{textAlign:"center"}}>
  <img src={LImage} alt="" className="banner_img"/>
  </div>
     <Container>
  <Row>
    <Col lg={6} md={12} sm={12}>
        <div className="div2_box_edit" style={{color:"white"}}>
        <h2>Confirm Details</h2>
        Full Name <label>{localStorage.getItem('name')}</label>
        <br/>
        Email ID <label>{localStorage.getItem('name')}</label>
        <br/>
        Phone Number <label>{localStorage.getItem('name')}</label>
        <br/>
        Amount 5,000
        <br/>
        <br/>
        <button className='btn btn-warning'>Proceed To Pay</button> OR
        <div className="btn btn-warning" onClick={() => setLoginUser({})} >Logout</div>
        </div>
        </Col>
        <br/>
        <Col lg={6} md={12} sm={12}>
        <div className="div2_box_edit" style={{color:"white"}}> 
        <h2>SWC JEE Vaccine Course</h2>
        <img src={Logo} alt=""/> 
        <h4>Terms & Conditions</h4>
        <p>You agree to share information entered on this page with Swastik Classes (owner of this page) and Razorpay, adhering to applicable laws.</p>
        </div>
        </Col>
        </Row>  
  </Container>
    </div>
    )
}

export default Homepage