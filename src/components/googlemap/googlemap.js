// import React from "react";
// import ReactDOM from "react-dom";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyDDQDfHaxhnPqezGNpfQl-yIbNnrtkMpH0&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={8} defaultCenter={{ lat: 49.839683, lng:  24.029717 }}>
//     {props.isMarkerShown && (
//       <Marker position={{ lat: 49.839683, lng: 24.029717 }} />
//     )}
//   </GoogleMap>
// ));
// export default MyMapComponent;
// ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  (<GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 49.873596, lng: 24.044788 }}
      >
    {props.isMarkerShown && <Marker position={{ lat: 49.873596, lng: 24.044788 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent 
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent;