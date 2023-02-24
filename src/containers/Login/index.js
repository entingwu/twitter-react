import React  from 'react';
import { Button, Input, Form, Dialog } from 'antd-mobile';
import './index.css';

const initialValues = {
  username: 'chenchen',
  password: '12345'
};

const Login = () => {
  const [form] = Form.useForm('');
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: JSON.stringify(values)
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
