import React from "react";
import { InlineWidget } from "react-calendly";

const Slot = () => {
  return (
    <div  className="Slot">
      <InlineWidget styles={{
  height: '650px'
}}  pageSettings={{
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: false,
  primaryColor: '00a2ff',
  textColor: '4d5055'
}}   url="https://calendly.com/astroanalytics/consultation-booking" />
    </div>
  );
};

export default Slot;