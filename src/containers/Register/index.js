import { useState } from 'react';
import { Form } from 'antd-mobile';
import TInput from '@components/TInput';
import Header from '@components/Header';
import DatePickerInput from '@components/DatePickerInput';
import Footer from './components/Footer';

import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 'TEL',
  EMAIL: 'EMAIL',
};

/**
 * Register Page
 */
const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '',
  });
  // switch action
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);

  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      const data = form.getFieldValue();
      console.log('data', data);
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
        return;
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Name could not be empty' }]}
          >
            <TInput length={50} label="Name" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
            <Form.Item
              name="tel"
              rules={[{ required: true, message: 'Please input a valid phone number', pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g }]}
            >
              <TInput length={11} label="Phone" />
            </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input a valid email', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g }]}
            >
              <TInput label="Email" />
            </Form.Item>
          )}

          <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.EMAIL ? 'Use phone instead' : 'Use email instead'}
          </span>
          <div className={style.birthdayTitle}>Birthday</div>
          <div>This will not be displayed publicly. Confirm your own age, even if the account is for business, pets, or other content.</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />
    </div>
  );
};

export default Register;
