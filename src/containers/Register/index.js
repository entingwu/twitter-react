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
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
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

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      const data = form.getFieldValue();
      console.log('data', data);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Name could not be empty' }]}
          >
            <Input placeholder="Name" className={style.input} />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
            <Form.Item
              name="tel"
              rules={[{ required: true, message: 'Phone number could not be empty' }]}
            >
              <Input placeholder="Phone" className={style.input} />
            </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Email could not be empty' }]}
            >
              <Input placeholder="Email" className={style.input} />
            </Form.Item>
          )}

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
        <Button className={style.footerButton} onClick={onClickNextStep}>Next step</Button>
      </div>
    </div>
  );
};

export default Register;
