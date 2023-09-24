import { useState } from 'react';
import Header from '@components/Header';
import OneStep from './components/OneStep';
import TwoStep from './components/TwoStep';

// 步数标识
const STEP = {
  ONE: 1,
  TWO: 2,
};

/**
 * Register Page
 */
const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState();

  const goToNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = (password) => {
    console.log({
      password,
      ...userInfo,
    });
  };

  return (
    <div>
      <Header />
      {step === STEP.ONE && <OneStep goToNextStepHandler={goToNextStepHandler} />}
      {step === STEP.TWO && (
      <TwoStep
        userInfo={userInfo}
        confirmRegisterHandler={confirmRegisterHandler}
      />
      )}
    </div>
  );
};

export default Register;
