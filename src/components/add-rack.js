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
    });
    //this.props.dispatch(addRack());
  }

  render(){    
    return (
        <form onSubmit={this.handleSubmit}>
          <div >
            <button className='add-button' type="submit">
              Add a Bikerack at your position
            </button>
          </div>
        </form>
    )
  }
}

export default reduxForm({
  form: 'rack',
  onSubmitFail: (errors, dispatch) => dispatch(focus('rack'))

})(AddTrip);
