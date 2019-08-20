import React from 'react';
import SignInFormInput from './SignInFormInput/SignInFormInput'

const SignInForm = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      SignInForm
      <SignInFormInput />
      <SignInFormInput />
      <SignInFormInput />
    </div>
  );
};  

export { SignInForm as default };