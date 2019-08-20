import React from 'react';
import Button from '../Button/Button';

const LogInControls = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      LogInControls
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export { LogInControls as default };