import { Button, message, Steps } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import MailerLiteForm from "./MailerLiteForm";
import Slot from "./Slot";



const FormAnt = () => {
  

  return (
    <>
      {/* <Steps id="steps" current={current} percent={percentArr[current]}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps> */}
      <div id="steps"
        style={{
          marginTop: "0vh",
          marginBottom: "5vh",
          height: "70%",
        }}
        className="steps-content"
      >
       {<MailerLiteForm />}
      </div>
     
    </>
  );
};

export default FormAnt;
