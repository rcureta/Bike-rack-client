import React, { Component } from 'react'
 import { connect } from 'react-redux'
import { Field, reduxForm, focus } from 'redux-form';

import { addRack } from '../actions/protected-data';

// import { addTrip } from '../actions/destination'

class AddTrip extends Component {
	  onSubmit(values) {
    return this.props.dispatch(addRack( values.latitude, values.longitude));
  }

  state = {
   latitude: null, longitude: null
  }



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
    this.props.addDestination(this.state);
    //this.props.dispatch(addRack());
    this.setState({
      latitude: '', longitude: ''
    })
  }

  render(){    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div >
            <label >Latitude:</label>
            <input className="input" type="text" placeholder = "Rack Latitude" onChange={this.handleLatitude} value={this.state.latitude}/>

            <label>Longitude:</label>
            <input className="input" type="text" placeholder = "Rack Longitude" onChange={this.handleLongitude} value={this.state.longitude}/>


            <button type="submit">
              Add a Bikerack
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
