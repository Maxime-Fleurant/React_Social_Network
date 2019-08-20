import React from 'react';
import SignUpFormInput from './SignUpFormInput/SignUpFormInput';

const SignUpForm = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      SignUpForm
      <SignUpFormInput />
      <SignUpFormInput />
      <SignUpFormInput />
      <SignUpFormInput />
      <SignUpFormInput />
      <SignUpFormInput />
      <SignUpFormInput />
    </div>
  );
};  

export { SignUpForm as default };