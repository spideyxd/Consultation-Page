import { Button, message, Steps } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import Tryin from './Tryin';
import Slot from './Slot';

const { Step } = Steps;
const steps = [
  {
    title: 'First',
    content: <Tryin/>,
  },
  {
    title: 'Second',
    content:<Slot/> ,
  },
  {
    title: 'Last',
    content:  'ok',
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

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default FormAnt;