'use client'
import React from 'react'
import { HomeOutlined, LogoutOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { apiFetch, clearToken } from '@/lib/api'
import { redirect } from 'next/navigation'

const { Header, Content, Footer, Sider } = Layout

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable'
}

async function handleLogout() {
  const res = await apiFetch('/api/logout', {
    method: 'POST'
  })
  if (res.ok) {
    clearToken()
    redirect('/login')
  } else {
    alert('Logout failed')
  }
}

const items: MenuProps['items'] = [
  {
    key: 'home',
    icon: <HomeOutlined />,
    label: <Link href="/">Home</Link>
  },
  {
    key: 'user',
    icon: <UserOutlined />,
    label: <Link href="/mypage">My Page</Link>
  },
  {
    key: 'upload',
    icon: <UploadOutlined />,
    label: 'Upload'
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: (
      <a href="#" onClick={handleLogout}>
        Logout
      </a>
    )
  }
]

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1 style={{ margin: '0 auto' }}>Welcome to HanaBlog</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
