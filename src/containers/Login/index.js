import { useState, useForm } from 'react';
import { Button, Input, Form, PasscodeInput, NumberKeyboard, Dialog } from 'antd-mobile';
import './index.css';

const initialValues = {
  username: 'chenchen',
  password: '12345'
};

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPwd] = useState('');
  const [form] = useForm('');
  const onSubmit = () => {
    const values = form.getFieldValues();
    Dialog.alert({
      content: JSON.stringify(values)
    })
  };

  const clickHandler = () => {
    alert("Successfully Login!" + name + ',' + password);
  }

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }

  const onChangePasswordHandler = (e) => {
    setPwd(e.target.value);
  }

  return (
    <div className="login">
      <Form layout='horizontal' mode='card' initialValues={initialValues}
        footer={
          <Button block color='primary' onClick={onSubmit} size='large'>
            Login
          </Button>
        }
      >
        <Form.Item label='User Name' name='username'>
          <Input placeholder='Input User Name' />
        </Form.Item>
        <Form.Item name='password'>
          <PasscodeInput 
            length={5}
            keyboard={<NumberKeyboard />}
          />
        </Form.Item>
      </Form>
      <div>User Name: <Input onChange={onChangeNameHandler}/></div>
      <div>Password: <Input type="password" onChange={onChangePasswordHandler}/></div>
    </div>
  );
}

export default Login;
