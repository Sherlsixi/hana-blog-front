'use client'
import { apiFetch, setToken } from '@/lib/api'
import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import { redirect } from 'next/navigation'

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

export default function Login() {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
    handleLogin(values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  async function handleLogin(values: FieldType) {
    await apiFetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data:', data)
        setToken(data.token)
        // redirect('/')
      })
      .finally(() => {
        redirect('/')
      })
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType> label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
