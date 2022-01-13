import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import LogoImg from '../../images/nav.png';
import PlaystoreImg from '../../images/playstore.png';


import "./footer.css"

const year = new Date().getFullYear();


const FooterPage = () => {
  return (
    
    <MDBFooter className="font-large pt-4 mt-4 color_footer">
  
      <MDBContainer fluid className="text-center text-md-left">

        <MDBRow className="footer_edit">
        <MDBCol lg="3" md="6" sm="12">
        <div className="div-foot-edit">
        <div className = "footer_logo_div">
        <img src={LogoImg} className = "image_footer" alt="iimage" />
        <br/>
        <br/>
        <InstagramIcon  className="icon1" />
        <FacebookIcon className="icon2"/>
        <TwitterIcon className="icon3"/>
        <LinkedInIcon className="icon4" />
        <h6 style={{color:"white"}} className="dl">Download the App From</h6>
        <button className="btn btn-sm btn-light">  <img src={PlaystoreImg} alt="" className="button_img btn_footer" />GOOGLE PLAY </button>
        <br/>
        <br/>
        </div>
        </div>
        </MDBCol>
        
          <MDBCol  lg="3" md="12  " sm="12" className="content1">
            
            <h5 className="title">COMPANY</h5>
            <ul>
            <li className="list-unstyled">
                <a href="/about"  className="footer_element">About Us</a>

              </li>
              <li className="list-unstyled">
                <a href="/team"  className="footer_element">Meet the Team</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Code Of Conduct</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Community</a>
              </li>
            </ul>
            <br/>
          <br/>
          </MDBCol>
       
          <MDBCol  lg="3" md="12" sm="12" className="content1">
            <h5 className="title">CONTACT</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Help & Support</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Work with Us</a>
              </li>
              
            </ul>
          </MDBCol>
          <MDBCol  lg="3" md="12" sm="12" className="content1">
          <h5 className="title" >LEGAL</h5>
          <ul>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Terms & Conditions</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Security</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="footer_element">Phishing & Fraud</a>
              </li>
            </ul>
           
          </MDBCol>
          
        </MDBRow>
        
        <hr/>
      </MDBContainer>
      <h5  style={{color:"white"}} className="endFooter"> © Copyright Swastik Classes {year}</h5>
      <br/>
    </MDBFooter>
  );
}

export default FooterPage;