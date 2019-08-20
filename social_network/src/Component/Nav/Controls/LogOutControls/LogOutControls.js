import React from 'react';
import Button from '../Button/Button';

const LogOutControls = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      LogOutControls
      <Button />
      <Button />
    </div>
  );
};

export { LogOutControls as default };