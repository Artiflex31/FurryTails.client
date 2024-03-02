import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "60%",
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 28.70406,
          lng: 77.102493,
        }}
      >
        <Marker position={{ lat: 28.70406, lng: 77.102493 }} />
        <Marker position={{ lat: 38.70406, lng: 77.102493 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
