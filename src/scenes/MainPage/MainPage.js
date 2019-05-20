import React from "react";

import SearchPanel from "./components/SearchPanel";
import Background from "./components/Background";
import WeatherListing from "./scenes/WeatherListing/WeatherListing";

const MainPage = props => {
  return (
    <div>
      <SearchPanel />
      <Background/>
      <WeatherListing />
    </div>
  );
};

export default MainPage;
