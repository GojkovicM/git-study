
import { useContext } from "react";
import "./city-map.scss";
import { WeatherContext } from "../../store/weather";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";



const apiKey = "AIzaSyCInw7ZPJ1Z7dn5PhwWrYsVpZBMRtlNIdc"

function CityMap() {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  const position = { lat: weather?.data.coord.lat, lng: weather?.data.coord.lon }

  return (
    <APIProvider apiKey="AIzaSyCInw7ZPJ1Z7dn5PhwWrYsVpZBMRtlNIdc">
    <div id="Citymap">
     <Map zoom={9} center={position} mapId="b90629078504fae2">
        <AdvancedMarker position={position}></AdvancedMarker>
     </Map>
    </div>
    </APIProvider>
  );
}

export default CityMap;
