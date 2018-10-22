import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export function About(props) {
	handleClick(){
	return <Redirect to = "/landing-page" />;
	
	}
  return (
    <div>
     
	<div>'This application is designed to aggregate the locations of bike racks based on user input. A button to record your geoposition in the database will be listed to allow you to record your location. Below it, you can navigate through google maps to find locations recorded in your area.'</div>
	<form onClick = {this.handleClick}>


    </div>
  );
}


const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(About);
