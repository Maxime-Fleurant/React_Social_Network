import React, { Fragment } from 'react';
import Header from '../Container/Header';

const Layout = (props) => {
  return (
    <Fragment>
      <div>
        <Header />
      </div>
      <div>
        { props.children }
      </div>
    </Fragment>
  )
};

export { Layout as default };