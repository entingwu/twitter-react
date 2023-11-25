import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import Show from '@components/Show';
import { registerUser } from '@services/register';
import { useAppContext } from '@utils/context';
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

  const [, setStore] = useAppContext();
  const navigate = useNavigate();
  // callback after the component is loaded
  useEffect(() => {
    if (step === STEP.ONE) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.TWO) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.ONE),
      });
    }
  }, [step]);

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

  return (
    <div>
      <Show visible={step === STEP.ONE}>
        <OneStep goToNextStepHandler={goToNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO} isMount>
        <TwoStep
          userInfo={userInfo}
          goToOneStepHandler={() => setStep(STEP.ONE)}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
