import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Flogin from '../../flogin'
import image1 from '../../images/image1.jfif'; 
import { Row, Container, Col } from 'react-bootstrap';
const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:"",
        phone:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div>
        <Container>
        <Row>
        <Col lg={6}  md={12} sm={12}> 
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <input type="tel" name="phone" value={user.phone} onChange={handleChange}  placeholder="Enter your Phone Number" ></input>
            <br/>
            <br/>
            <div className="btn btn-success" onClick={login}>Login</div>
            <br/>
            <br/>
            <Flogin/>
            </div>
        </Col>
        <Col  lg={6} md={12} sm={12}>
        <br/>
        <br/>
        <img src={image1} alt="Swastik_Image" /></Col>
        </Row>
        </Container>
        </div>
    )
}

export default Login