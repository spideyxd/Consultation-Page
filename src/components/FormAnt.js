import { Button, message, Steps } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import MailerLiteForm from "./MailerLiteForm";
import Slot from "./Slot";

const { Step } = Steps;
const steps = [
  {
    title: "Book Slot",
    content: <Slot />,
  },
  {
    title: "Pay",
    content: "Payment",
  },
  {
    title: "Submit Details",
    content: <MailerLiteForm />,
  },
];

const FormAnt = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  let percentArr=[33.3333333333,66.6666666667,100];

  return (
    <>
      <Steps id="steps" current={current} percent={percentArr[current]}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div
        style={{
          marginTop: "1vh",
          marginBottom: "5vh",
          height: "70%",
        }}
        className="steps-content"
      >
        {steps[current].content}
      </div>
      <div
        className="steps-action"
        style={{
          marginTop: "5vh",
          marginBottom: "5vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
      </div>
    </>
  );
};

export default FormAnt;
