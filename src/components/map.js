import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyGreatPlace from './test-marker';
import { connect } from 'react-redux';



export default function SimpleMap(props) {
  let rackPoints = props.racks.map(rack => {
    return (
      <MyGreatPlace key={rack.id} lat={rack.latitude} lng={rack.longitude} />
    )
  })
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '97vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyASNm1y3GtT8TY4hLgLbLcn8hkNiMx_ADs' }}
        defaultCenter={{
          lat: 32.71,
          lng: -117.16
        }}
        defaultZoom={11}
      >


        {rackPoints}

      </GoogleMapReact></div>
  )
}


/*const mapStateToProps = (state) => ({
racks: state.racks
});

export default connect(mapStateToProps)(SimpleMap);

*/
