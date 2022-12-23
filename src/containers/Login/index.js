import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const clickHandler = () => {
    alert(name + ' login successfully')
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value)
  }
  const onChangePwHandler = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="login">
        {name}
        <div>User Name: <input onChange={onChangeNameHandler}/></div>
        <div>Password: <input type="password" onChange={onChangePwHandler}/></div>
        <div><button onClick={clickHandler}>Login</button></div>
    </div>
  );
}

export default Login;
