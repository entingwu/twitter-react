import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPwd] = useState('');

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
      {name}
      {password}
      <div>User Name: <input onChange={onChangeNameHandler}/></div>
      <div>Password: <input type="password" onChange={onChangePasswordHandler}/></div>
      <div><button onClick={clickHandler}>Login</button></div>
    </div>
  );
}

export default Login;
