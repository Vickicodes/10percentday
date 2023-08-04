import React, { useState, useEffect } from "react";
import "./App.css";
import WelcomeMessage from "./containers/WelcomeMessage";
import Interests from "./containers/Interests";

const App = () => {
  return (
    <>
      <p>BBC IMAGE GOING HERE</p>
      <WelcomeMessage
        headingText="Heading"
        paragraphText="I am a paragraph of the welcome message"
      />
      <Interests />
    </>
  );
};

export default App;
