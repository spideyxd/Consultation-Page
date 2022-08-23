import React from 'react';
import 'antd/dist/antd.css';
import {DollarOutlined ,LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';

const { Step } = Steps;

const FormAnt = () => (
  <Steps>
    <Step status="wait" title="Login" icon={<UserOutlined />} />
    <Step status="wait" title="Verification" icon={<SolutionOutlined />} />
    <Step status="wait" title="Pay" icon={<DollarOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>
);

export default FormAnt;