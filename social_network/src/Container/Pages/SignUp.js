import React from 'react';
import AddImage from '../../Component/SignUp/AddImageButton/AddImageButton';
import SignUpForm from '../../Component/SignUp/SignUpForm/SignUpForm';

const SignUp = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      SignUp
      <AddImage />
      <SignUpForm />
    </div>
  );
};  

export { SignUp as default };