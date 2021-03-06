import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import HeaderBar from './header-bar2';
import About from './About';

import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home" >

      <HeaderBar />
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
