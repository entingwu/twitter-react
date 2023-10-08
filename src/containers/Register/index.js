import { useState } from 'react';
import { Toast } from 'antd-mobile';
import Header from '@components/Header';
import Show from '@components/Show';
import { registerUser } from '@services/register';
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
  const [userInfo, setUserInfo] = useState({});

  const goToNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    console.log('>>>', res);
    if (res.success) {
      Toast.show('Login successfully.');
      return;
    }
    Toast.show('Failed to login.');
  };

  const onClickClose = () => {
    setStep(STEP.ONE);
  };

  return (
    <div>
      <Header onClickClose={onClickClose} />
      <Show visible={step === STEP.ONE}>
        <OneStep goToNextStepHandler={goToNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO}>
        <TwoStep
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
