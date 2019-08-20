import React from 'react';
import LogInControls from './LogInControls/LogInControls';
import LogOutControls from './LogOutControls/LogOutControls';

const Controls = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      Controls
      <LogInControls />
      <LogOutControls />
    </div>
  );
};

export { Controls as default };