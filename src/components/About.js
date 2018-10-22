import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.css';
import './app.css';


export class About extends React.Component {

		constructor(props) {
		super(props);
		this.state = {
			faq: false
		};
	}
	handleClick(e){
		this.setState({
			faq: true
		});	
	}

	render(){

		if (this.state.faq) {
			return <Redirect to="/" />;
		}
  return (
    <div className='login-form'>
     
	<div>'This application is designed to aggregate the locations of bike racks based on user input. A button to record your geoposition in the database will be listed to allow you to record your location. Below it, you can navigate through google maps to find locations recorded in your area.'</div>
	<form className='add-button2' onClick = {e=>this.handleClick(e)}>return</form>


</div>
  );

	}
}


const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(About);
