import React from 'react'
import { Form, Input, Button } from 'antd';

const Setting = () => {
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
     
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item >

      <input type="file" name="myImage" accept="" />
    
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
      
    </Form>
    
 
// ReactDOM.render(<Demo />, mountNode);
    )
};

export default Setting;
