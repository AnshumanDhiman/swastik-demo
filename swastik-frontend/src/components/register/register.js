import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import image1 from '../../images/image1.jfif'; 
import { useHistory } from "react-router-dom"

import { Row, Container, Col } from 'react-bootstrap';
import Inbox from '../../images/inbox-mail.png';
import Phone from '../../images/phone.png';
import Support from '../../images/support.png';

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div >
   <Container>
  <Row>
    <Col lg={7} md={12} sm={12}>
    <br/>
    <br/>
    <img src={image1} alt="Swastik_Image" className="img-swast" />
    </Col>
    <Col lg={5} md={12} sm={12}>
    <br/>
    <br/>
    <br/>
    <div className="register">
            <h1>Register</h1>
            {console.log("User", user)}
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <br/>
            <br/>
            <div className="btn btn-warning" onClick={register} >Register</div>
            <br/>
            <br/>

            </div>
    </Col>
    </Row>

    </Container>
    <div>
      <Container>
      <br/>
  <Row>

        <h2>Features</h2>
        <p>1. Overview of <strong>11th & 12th PCM syllabus</strong>. <br/>
        2. Helps Students to <strong>level up their 10th conceptual understanding</strong>. <br/>
        3. <strong>Taught By Founders</strong> (IIT’ians with 15+ years of experience) <br/>
        4. Huge Opportunity for the students who wish to opt science stream in XI-XII. <br/>
        5.Increase the Knowledge and Boost the confidence level of students. <br/>
        6. Interactive & Interesting Learning experience through Illustrations & experiments. <br/>
        7. Bridge Course <strong>between Xth & XIth syllabus</strong>.</p>
        <br/> 
        </Row>  
  </Container>
  <div className="div_box_edit">
  <Row>

  <Col lg={4} md={12} sm={12}>
  <a href="mailto:support@swastikclasses.com"><img src={Inbox} className = "con_edit div_img_edit" alt=""/></a>
  <br/> 
    <h4 className="c_edit">Email</h4>
    <p  className="p_edit">support@swastikclasses.com</p>
  </Col>
  <Col lg={4} md={12} sm={12}>
  <a href="tel:+917290068878"><img src={Phone} className = "con_edit div_img_edit" alt=""/></a>
  <br/>
    <h4 className="c_edit">Phone</h4>
    <p  className="p_edit">+91 72900 68848</p>
  </Col>
  <Col lg={4} md={12} sm={12}>
  <a><img src={Support} className = "con_edit div_img_edit" alt=""/></a> 
  <br/>
    <h4 className="c_edit">Support</h4>
    <p className="p_edit">24/7 Customer Support</p>
  </Col>

  </Row>
  </div>
    </div>
        </div>
    )
}

export default Register