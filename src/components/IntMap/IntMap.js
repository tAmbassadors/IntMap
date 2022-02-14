import React, { useState, useEffect, useCallback } from "react";
import Map from "../Map";
import Tour from "../Tour";

function IntMap() {
  const [location, setLocation] = useState("lobby");
  function changeLocation(place) {
    setLocation(place);
  }
  return (
    <>
      <Map location={location} changeLocation={changeLocation} />
      <Tour location={location} changeLocation={changeLocation} />
    </>
  );
}

export default IntMap;
