import React from 'react';
import Nav from '../Component/Nav/Nav'

const Header = (props) => {
  return (
    <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      Header
      <Nav />
    </div>
  );
};

export { Header as default };