import { useState } from 'react';
import { Input, Button, Form } from 'antd-mobile';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';

import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 'TEL',
  EMAIL: 'EMAIL',
};

/**
 * Register Page
 */
const Register = () => {
  const [formData] = useState({
    name: 'Enting',
    tel: '',
    email: '',
    birthday: '',
  });
  // switch action
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form initialValues={formData} className={style.formContainer}>
          <Form.Item name="name">
            <Input placeholder="Name" className={style.input} />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && <Form.Item name="tel"><Input placeholder="Phone" className={style.input} /></Form.Item>}
          {accountType === ACCOUNT_TYPE.EMAIL && <Form.Item name="email"><Input placeholder="Email" className={style.input} /></Form.Item>}
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use phone instead' : 'Use email instead'}
          </div>
          <div className={style.birthdayTitle}>Birthday</div>
          <div>This will not be displayed publicly. Confirm your own age, even if the account is for business, pets, or other content.</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>Next step</Button>
      </div>
    </div>
  );
};

export default Register;
