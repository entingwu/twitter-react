import React  from 'react';
import { Button, Input, Form, Dialog } from 'antd-mobile';
import { loginService } from '../../services/login';
import './index.css';

const initialValues = {
  username: 'chenchen',
  password: '12345'
};

const Login = () => {
  const [form] = Form.useForm('');

  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const response = await loginService(values.username, values.password);
    
    if (response && response.length > 0) {
      console.log(response);
      Dialog.alert({
        content: 'Successfully Login',
      });
      return;
    }

    Dialog.alert({
      content: 'Failed to login'
    })
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout='horizontal'
        mode='card'
        initialValues={initialValues}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Login
          </Button>
        }
      >
        <Form.Item label='User Name' name='username'>
          <Input placeholder='Input User Name' clearable />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='Input Password' clearable type='password' />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
