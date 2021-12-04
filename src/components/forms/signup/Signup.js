import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import 'antd/dist/antd.css';
import { auth } from '../../../config/Firebase';
import './Signup.css' 

const Signup = () => {
  const navigate = useNavigate()
  // const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const SignupHandler = async () =>   {
    try {
      const user = await createUserWithEmailAndPassword(auth,  userEmail, userPass );
      if(user)
      {
        navigate('/')
  
      }; 
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2> Please Sing up </h2>
      <Form.Item
        label="First & Last Name"
        name="Username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input  />
      </Form.Item>

      <Form.Item
        label="Email"
        name="userE mail"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input onChange={(e) => {
          setUserEmail(e.target.value);
        }
        } />
      </Form.Item>

      <Form.Item
        label="Password"
        name="UserPass"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  onChange={(e) => {
          setUserPass(e.target.value);
        }
        }/>
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={SignupHandler} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );


  // ReactDOM.render(<Demo />, mountNode);

};
export default Signup;