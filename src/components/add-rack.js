import React, { Component } from 'react'
 import { connect } from 'react-redux'
import { Field, reduxForm, focus } from 'redux-form';

import { addRack } from '../actions/protected-data';

// import { addTrip } from '../actions/destination'
import './style.css';
class AddTrip extends Component {
constructor(props) {
        super(props);

        this.state = {
            latitude: 0,
	    showManual: false,
            longitude: 0
        }
    }

onSubmit(values) {
    return this.props.dispatch(addRack( values.latitude, values.longitude));
  }


  /*state = {
   latitude: null, longitude: null
  }*/



  handleLongitude = (e) => {
    this.setState({
      longitude: e.target.value
    })
  }

  handleLatitude = (e) => {
    this.setState({
      latitude: e.target.value
    })
  }


  handleSubmit = (e) => {


    e.preventDefault();
    console.log(this.state);
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude + " " + position.coords.longitude);

        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
    console.log('after:'+this.state.latitude);
    this.props.addDestination(this.state);
    },(err) => {console.log(err);}, {maximumAge:0, enableHighAccuracy: true});
    //this.props.dispatch(addRack());
  }

	handleClick = (e) =>{
		e.preventDefault();
		this.setState({showManual: true});
	}

	  handleSubmitManual = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addDestination(this.state);
    //this.props.dispatch(addRack());
    this.setState({
      latitude: '', longitude: ''
    })
  }


  render(){   

		if(this.state.showManual === true ){
		 return (
      <div>
      <form onSubmit={this.handleSubmitManual}>
      <div >
            
	    <div className = 'block'>
	    <label >Latitude:</label>
            <input className="manualInput" type="text" placeholder = "Rack Latitude" onChange={this.handleLatitude} value={this.state.latitude}/>
		</div>
		<div className = 'block'>

            <label>Longitude:</label>
            <input className="manualInput" type="text" placeholder = "Rack Longitude" onChange={this.handleLongitude} value={this.state.longitude}/>
		</div>

            <button type="submit">
              Add a Bikerack
            </button>
          </div>
        </form>
      </div>
    )

}




    return (
	<div>
	<form onSubmit={this.handleSubmit}>
          <div >
            <button className='add-button' type="submit">
              Add a Bikerack at your position
            </button>
          </div>
        </form>
	<form onSubmit = {this.handleClick}>
		<div>
		<button className = 'add-button' type = 'submit' onClick = {this.handleClick}>
			Enter locations manually
		</button>
		</div>
	</form>
	</div>
    )
  }
}

export default reduxForm({
  form: 'rack',
  onSubmitFail: (errors, dispatch) => dispatch(focus('rack'))

})(AddTrip);
