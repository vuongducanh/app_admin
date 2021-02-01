import React from 'react';
import './styles.scss';
import { login } from './../../api/login'
import { Checkbox, Form, Input, Button } from 'antd';

const Login = (props) => {

  const _onFinish =  async (values) => {
    localStorage.setItem('access_token', 'aaaaa')
    props.history.push('/dashboard')
    try {
      const res = await login(values)
      localStorage.setItem('access_token', res.data.access_token)
      props.history.push('/dashboard')
    } catch (error) {
      localStorage.setItem('access_token', "")
      throw error
    }
  };


  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="title-login">Đăng nhập</h1>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={_onFinish}
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="form-item" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password  className="form-item"/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Nhớ tôi</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
        </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
