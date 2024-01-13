import React, { useContext, useEffect } from "react";
import "./search.scss";
import { useState } from "react";
import { WeatherContext } from "../../store/weather";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { getLocation } from "../../Api/service";

function Search() {
  const [search, setSearch] = useState("");
  // const [location, setLocation] = useState("Beograd");
  const [error, setError] = useState("");

  const { fetchWeatherContext, fetchWeekWeatherContext, selected, setSelected } =
    useContext(WeatherContext);

  const handleSelection = (selected) => {
    geocodeByAddress(selected)
      .then((results) => getLatLng(results[0]))
      .then(async (latLng) => {
        const currentLocation = await getLocation(latLng.lat, latLng.lng);
        setSelected(currentLocation?.city);
        setSearch("");
      })
      .catch((error) => console.error("Error", error));
  };

  // const getUserLocation = () => {
  //   if (!navigator.geolocation) {
  //     setError("Zabranjeno");
      
  //   } else {
  //     navigator.geolocation.getCurrentPosition(async (position) => {
  //       const { latitude, longitude } = position.coords;                            //destructuring
  //       const userLocation = await getLocation(latitude, longitude);
  //       setLocation(userLocation?.city);
  //     });
  //   }
  // };

  const handleChange = (city) => {
    setSearch(city);
  };

  
 
  useEffect(() => {
    if (selected) {
      fetchWeatherContext(selected);
      fetchWeekWeatherContext(selected);
    }
  }, [selected]);


  // useEffect(() => {
  //   getUserLocation();
  // }, []);

  return (
    <div id="Search">
      <PlacesAutocomplete
        value={search}
        onChange={handleChange}
        onSelect={handleSelection}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#202b3b",
                      cursor: "pointer",
                      color: "white",
                      width: "300px",
                      padding: "5px",
                      border: "1px solid black",
                    }
                  : {
                      backgroundColor: "#202b3b",
                      cursor: "pointer",
                      color: "white",
                      width: "300px",
                      padding: "5px",
                      border: "1px solid black",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      {/* <button onClick={getUserLocation}>klik</button> */}
      <h1>{error}</h1>
    </div>
  );
}

export default Search;
