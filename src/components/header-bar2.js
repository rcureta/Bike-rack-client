import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';


export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.ToggleFunction();
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  ToggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <a onClick={() => this.logOut()}><i className="fa fa-sign-out"></i> SIGN OUT</a>
      );
    }

    return (
      // < !--Navbar(sit on top) -- >
      <div className="header-bar w3-bar w3-center w3-blue">
        <div className="w3-bar-item" /*style={{margin:8}}*/>Rack Mapper</div>

            <a href="#about" className="w3-bar-item w3-button"><i></i>  About the app</a>



      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
