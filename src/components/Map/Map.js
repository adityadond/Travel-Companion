import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
//import mapStyles from '../../mapStyles';
import useStyles from "./styles.js";

function Map({ setCoordinates, setBounds, coordinates,places }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBIQ32GnM5Y7-WFqZdcf7rzrvUjgBskI2k" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={""}
        >
{places?.map((place,i)=>(
<div className={classes.markerContainer}
    lat={place.latitude}
    lng={place.longitude}
    key={i}
>
    </div>
))}

     
   
    </GoogleMapReact>
    </div>
 ) };


export default Map;
