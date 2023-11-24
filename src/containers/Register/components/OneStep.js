import { useState } from 'react';
import { Form } from 'antd-mobile';
import TInput from '@components/TInput';
import DatePickerInput from '@components/DatePickerInput';
import PropTypes from 'prop-types';
import Footer from './Footer';

import style from '../index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 'TEL',
  EMAIL: 'EMAIL',
};

/**
 * 1. Register Page
 */
const OneStep = ({
  goToNextStepHandler,
}) => {
  const [form] = Form.useForm();
  const [formData] = useState({
    username: '',
    tel: '',
    email: '',
    birthday: '',
  });
  // switch action
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);
  // useState 一个组件数据存储单元
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
      goToNextStepHandler(validate); // userInfo
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
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
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item
            name="username"
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
      <Footer label="Next Step" disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />
    </div>
  );
};

OneStep.propTypes = {
  goToNextStepHandler: PropTypes.func.isRequired,
};

export default OneStep;
