import React, { Component } from 'react'
import firebase from './firebase'



export class Flogin  extends Component {
  handleClick=()=>{
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = '+919773500211';
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log(result.user);
           
             document.querySelector('label').textContent +=   result.user.phoneNumber + " Number verified";
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }
  render() {
    return (
      <div>
       
        
        <div id="recaptcha"></div>
        
        <button onClick={this.handleClick}  className="btn btn-warning">Generate OTP</button>
            <label></label>
      </div>
    )
  }
}

export default Flogin