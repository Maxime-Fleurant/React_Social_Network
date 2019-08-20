import React from 'react';
import Layout from './Component/Layout';
import SplashPage from './Container/Pages/SplashPage';
import SignIn from './Container/Pages/SignIn';
import SignUp from './Container/Pages/SignUp';
import UserProfile from './Container/Pages/UserProfile';
import Wall from './Container/Pages/Wall';

function App() {
  return (
    <div className="App" style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
      <Layout>
        <div style={{border : '1px solid black', padding : '3px', margin:'3px'}}>
          Body
          <SplashPage />
          <SignIn />
          <SignUp />
          <UserProfile />
          <Wall />
        </div>
      </Layout>
    </div>
  );
}

export default App;