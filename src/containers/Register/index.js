import React from 'react';
import { Input, Button } from 'antd-mobile';
import style from './index.module.css';
import Header from '../../components/Header';
import DatePickerInput from '../../components/DatePickerInput';

/**
 * Register Page
 */
const Register = () => {
  console.log(">>>");
  return (
    <div>
    <Header />
    <div className={style.form}>
      <div className={style.formTitle}>Create your account</div>
      <Input placeholder="Name" className={style.input} />
      <Input placeholder="Phone" className={style.input} />
      <div className={style.changeTypeButton}>Use email instead</div>
      <div className={style.birthdayTitle}>Birthday</div>
      <div>This will not be displayed publicly. Confirm your own age, even if the account is for business, pets, or other content.</div>
      <DatePickerInput />
    </div>
    <div className={style.footer}>
      <Button className={style.footerButton}>Next step</Button>
    </div>
  </div>
  );
}

export default Register;