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
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  

  const { fetchWeatherContext, fetchWeekWeatherContext } =
    useContext(WeatherContext);

  const handleSelection = (selected) => {
    geocodeByAddress(selected)
      .then((results) => getLatLng(results[0]))
      .then(async (latLng) => {
        const currentLocation = await getLocation(latLng.lat, latLng.lng);
        setLocation(currentLocation?.city);
        setSearch("");
      })
      .catch((error) => console.error("Error", error));
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Zabranjeno");
    } else {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const userLocation = await getLocation(latitude, longitude);
        setLocation(userLocation?.city);
      });
    }
  };

  const handleChange = (city) => {
    setSearch(city);
  };

  useEffect(() => {
    if (location) {
      fetchWeatherContext(location);
      fetchWeekWeatherContext(location);
    }
  }, [location]);

  useEffect(() => {
    getUserLocation();
  }, []);

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
                      backgroundColor: "#fafafa",
                      cursor: "pointer",
                      color: "black",
                    }
                  : {
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      color: "black",
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

{/*    
      <button>klik</button>  */}
    </div>
  );
}

export default Search;
