import "./App.css";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import {getPlacesData} from './api/index'
import { useEffect, useState } from "react";

function App() {
const [places,setPlaces]=useState([])

const[coordinates,setCoordinates]=useState({})
const [bounds,setBounds]=useState({})

useEffect(() => {
  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    setCoordinates({ lat: latitude, lng: longitude });
  });
}, []);

  useEffect(()=>{
    
    console.log(coordinates,bounds);
    getPlacesData(bounds.sw,bounds.ne).then((data)=>{
      console.log(data);

      setPlaces(data)
    })
  },[coordinates,bounds])
  return (
    <>
      <CssBaseLine />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} 
          setBounds={setBounds}
          coordinates={coordinates}
          places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
