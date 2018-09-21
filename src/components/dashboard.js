/*eslint-disable no-undef */

import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData, addRack } from '../actions/protected-data';
import AddRack from './add-rack'
import SimpleMap from './map';
import Marker from './marker';
import HeaderBar from './header-bar';


export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  addDestination = (newRack) => {
    //console.log('this is from dashboard: ' + trip)
    //console.log('this is the original state array: ' + this.state.trips)
    newRack.id = Math.random();
    //let newRacks = [...this.props.racks, newRack];
    //console.log('this is the new array: ' + trips)
    /*this.setState({
      racks: newRacks
    })*/
    this.props.dispatch(addRack(newRack));
  }

  displayDetails = (id) => {
    console.log(id)
  }

  render() {
    console.log(this.props.racks);
    return (
      // < !--Navbar(sit on top) -- >
      <div className="header-bar">
         <HeaderBar addDestination={this.addDestination} />
        <div>
        
<SimpleMap racks={this.props.racks} />
	</div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    racks: state.protectedData.racks
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


// return (
//   <div className="display-details w3-row w3-padding-32 w3-section">
//     <div className="budget-container">
//       <div className="w3-half">
//         <p className="w3-left">Total Budget</p>
//       </div>
//       <div className="w3-half">
//         <p>$0</p>
//       </div>
//     </div>
//     <div className="trip-plan">
//       <p>Nothing</p>
//       <button w3-bottom>ADD</button>
//     </div>
//   </div>
// )
