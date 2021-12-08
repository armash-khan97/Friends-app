import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import 'antd/dist/antd.css';
import { auth, db } from '../../../config/Firebase';
import './Signup.css'
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate()
  // const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  // const SignupHandler = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, userEmail, userPass);
  //     if (user) {

  //       // Add a new document in collection "cities"
  //       setDoc(doc(db, "user", user.user.uid), {
  //         name: "Los Angeles",
  //         state: "CA",
  //         country: "USA"
  //       });
  //       navigate('/')

  //     };
  //     console.log(user)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const onFinish = (values) => {
    console.log(values)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setDoc(doc(db, "user", user.uid), {
                  name: values.name,
                  email: values.email,
                  uid:user.uid
                });
                navigate('/')

        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


  }

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
      onFinish={onFinish}
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
        <Input />
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
          setUserEmail(e.target.value);
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
        <Input.Password onChange={(e) => {
          setUserPass(e.target.value);
        }
        } />
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
        <Button  type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );


  // ReactDOM.render(<Demo />, mountNode);

};
export default Signup;