import React from 'react';
import { Button, Form, Dialog } from 'antd-mobile';
import { Link } from 'react-router-dom';
import TInput from '@components/TInput';
import { login } from '../../services/login';
import style from './index.module.scss';

/**
 * Login Page
 */
const Login = () => {
  const [form] = Form.useForm('');

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const response = await login(values.username, values.password);
      if (response.success && response.data.length > 0) {
        console.log(response);
        Dialog.alert({
          content: 'Successfully Login',
        });
        return;
      }
      Dialog.alert({
        content: 'Failed to login',
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.formTitle}>Login Twitter</div>
      <Form
        form={form}
        className={style.formContainer}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Name could not be empty' }]}
        >
          <TInput label="User Name" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Password could not be empty' }]}
        >
          <TInput label="password" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>
          Next Step
        </Button>
      </Form>
      <div className={style.goToRegister}>
        No account yet?
        <Link
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
