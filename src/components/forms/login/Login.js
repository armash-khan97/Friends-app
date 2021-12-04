import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../config/Firebase';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import './Login.css'

const Login = () => {
  const navigate = useNavigate()
  const [userLoginEmail, setUserLoginEmail] = useState('');
  const [userLoginPass, setUserLoginPass] = useState('');

  const LoginHandler = async() => {
    try{
      const LoginUser = await signInWithEmailAndPassword(auth, userLoginEmail, userLoginPass);
     if( LoginUser)
      {
       navigate('/home')

      };
     console.log(LoginUser)
   } catch(error)
    {
     console.log(error.message)
    }
  };
 

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="userLoginEmail"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
        className="email"
      >
        <Input  onChange={(e) => {
          setUserLoginEmail(e.target.value)
          }}
         prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="userLoginPass"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password  onChange={(e) => {setUserLoginPass(e.target.value)}}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
         
        {/* <a className="login-form-forgot" href=".">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button onClick={LoginHandler} type="primary"
         htmlType="submit" className="login-form-button">
         Log in
        </Button>
        <br/>
        <Button type="primary" htmlType="submit" className="login-form-button">
         <a href='signup'> Sing up</a>
        </Button>
      </Form.Item>
    </Form>
  );
};


export default Login;

