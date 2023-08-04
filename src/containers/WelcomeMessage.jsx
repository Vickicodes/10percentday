import React from "react";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const WelcomeMessage = (props) => {
  console.log(props);
  const { headingText, paragraphText } = props;
  return (
    <div>
      <Heading headingText={headingText} />
      <Paragraph paragraphText={paragraphText} />
    </div>
  );
};

export default WelcomeMessage;
