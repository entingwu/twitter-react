import { Button, Input, Form, Dialog } from 'antd-mobile'
import './index.css';

const initialValues = {
  username: '',
  password: 123
};

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({ 
      content: JSON.stringify(values),
    })
  }

  return (
    <div className="login">
      <Form 
        form={form}
        layout='horizontal' mode='card' initialValues={initialValues}
        footer={
          <Button color="primary" onClick={onSubmit}>Login</Button>
        }>
        <Form.Item label='username' name='username'>
          <Input placeholder='username' clearable />
        </Form.Item>
        <Form.Item label='password' name='password'>
          <Input placeholder='password' clearable type='password'/>
        </Form.Item>
      </Form>    
    </div>
  );
}

export default Login;
