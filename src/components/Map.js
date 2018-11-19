import React from "react";

class Map extends React.Component {
  markers = [];
  addMarkers = locations => {
    if (window.google) {
      let infowindow = new window.google.maps.InfoWindow();
      for (let i = 0; i < locations.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: locations[i].venue.location.lat,
            lng: locations[i].venue.location.lng
          },
          map: window.mapObject,
          title: locations[i].venue.id
        });
        marker.addListener("click", () => {
          let content = this.prepareContent(locations[i]);
          infowindow.setContent(content);
          infowindow.open(window.mapObject, marker);
        });
        window.infowindow = infowindow;
        this.markers.push(marker);
      }
      window.markers = this.markers;
    }
  };

  prepareContent = location => {
    return `<div>
    <p className="title">
      Name: <a href="#">${location.venue.name}</a>
  </p>
    <p>Address: ${location.venue.location.address}</p>
  </div>`;
  };

  render() {
    //  console.log("LOCATIONSSSS", this.props.locations);
    this.addMarkers(this.props.locations);
    return <div id="map" />;
  }
}

export default Map;
