import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../../config/Firebase'
import './Singup.css'

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singupHandler = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, name, email, password );
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
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={(e) => {
          setName(e.target.value);
        }
        } />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input onChange={(e) => {
          setEmail(e.target.value);
        }
        } />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  onChange={(e) => {
          setPassword(e.target.value);
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
        <Button onClick={singupHandler} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );


  // ReactDOM.render(<Demo />, mountNode);

};
export default Signup;