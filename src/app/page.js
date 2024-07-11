"use client";
import React, { useState } from "react";
import Weather from "../components/Weather";

const Home = () => {
  const [location, setLocation] = useState("");

  return (
    <div>
      <Weather location={location} setLocation={setLocation} />
    </div>
  );
};

export default Home;
