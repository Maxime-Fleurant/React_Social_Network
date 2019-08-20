import React from 'react';
import SignInTitle from '../../Component/SignIn/SignInTitle/SignInTitle';
import SignInForm from '../../Component/SignIn/SignInForm/SignInForm';

const SignIn = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      SignIn
      <SignInTitle />
      <SignInForm />
    </div>
  );
};  

export { SignIn as default };