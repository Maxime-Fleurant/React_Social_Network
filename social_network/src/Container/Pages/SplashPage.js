import React from 'react';
import SplashTitle from '../../Component/SplashTitle/SplashTitle';

const SplashPage = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      SplashPage
      <SplashTitle />
    </div>
  );
};  

export { SplashPage as default };