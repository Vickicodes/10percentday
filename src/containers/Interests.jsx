import React, { useState, useEffect } from "react";
import InterestCard from "../components/Card";

const Interests = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    const userInterests = fetchUserInterests();

    setInterests(userInterests);
  }, [interests]);

  return myInterests.map(({ title, text, buttonText }) => {
    return <InterestCard title={title} text={text} buttonText={buttonText} />;
  });
};

export default Interests;
