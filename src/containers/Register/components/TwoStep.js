import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from 'antd-mobile';
import style from '../index.module.scss';
import Footer from './Footer';

/**
 * 2. Add password
 */
const TwoStep = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);

  const onConfirmRegister = () => {
    confirmRegisterHandler(password);
  };

  const onChangePwd = (val) => {
    setPassword(val);
  };

  const onChangeConfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  return (
    <div className={style.form}>
      <div className={style.form}>
        <div className={style.formTitle}>Create Your Account</div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Name:
            <span>{userInfo.username}</span>
          </div>
          {userInfo.email && (
          <div className={style.showLabel}>
            Email:
            <span>{userInfo.email}</span>
          </div>
          )}
          {userInfo.tel && (
          <div className={style.showLabel}>
            Mobile:
            <span>{userInfo.tel}</span>
          </div>
          )}
          <div className={style.showLabel}>
            Birthday:
            <span>{userInfo.birthday}</span>
          </div>
        </div>
        <div className={style.label}>Please enter password</div>
        <Input className={style.input} onChange={onChangePwd} />
        <div className={style.label}>Please entor password again to confirm</div>
        <Input className={style.input} type="password" onChange={onChangeConfirmPwd} />
        {disabled && <div className={style.showTip}>The passwords entered twice need to be consistent</div>}
      </div>
      <Footer disabled={disabled} label="Confirm Registration" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

TwoStep.propTypes = {
  confirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};
export default TwoStep;
