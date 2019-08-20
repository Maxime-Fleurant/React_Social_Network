import React from 'react';
import Title from './Title/Title';
import Controls from './Controls/Controls';

const Nav = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      Nav
      <Title />
      <Controls />
    </div>
  );
};

export { Nav as default };