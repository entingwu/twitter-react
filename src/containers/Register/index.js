import React from 'react';
import { Input, Button } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/twitter-logo.svg';
import './index.css';

/**
 * Register Page
 */
const Register = () => {
  console.log(">>>");
  return <div className='register-page'>
    <div className='header'>
      <CloseOutline />
      <img src={logo} alt="twitter-logo"></img>
    </div>
    <div className='form'>
      <div>Create your account</div>
      <Input placeholder="Name" />
      <Input placeholder="Phone" />
      <div>Use email instead</div>
      <div>Birthday</div>
      <div>This will not be displayed publicly. Confirm your own age, even if the account is for business, pets, or other content.</div>
      <Input placeholder="" />
    </div>
    <div className='footer'>
      <Button>Next step</Button>
    </div>
  </div>
}

export default Register;