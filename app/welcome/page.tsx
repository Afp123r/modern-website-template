// app/page.tsx 或者 pages/index.tsx (取决于你的 Next.js 版本或项目结构)

import React from 'react';

// Ant Design 组件 (可选，如果你的项目使用了 Ant Design)
import { Card, Button, Typography, Space } from 'antd';
import { LoginOutlined, UploadOutlined } from '@ant-design/icons';
import Link from 'next/link'; // 如果是 Next.js，使用 next/link 进行路由跳转

const { Title, Paragraph } = Typography;

const WelcomePage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh', // 让页面至少占据视口高度的80%
      background: '#f0f2f5', // 与 Ant Design 默认背景色类似
      padding: '20px'
    }}>
      <Card
        title={<Title level={2} style={{ textAlign: 'center', marginBottom: 0 }}>欢迎使用条形码文件管理系统</Title>}
        style={{
          width: '100%',
          maxWidth: '600px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          padding: '20px'
        }}
        bodyStyle={{ textAlign: 'center' }}
      >
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          本系统旨在帮助您高效地管理和查找文件。通过条形码扫描，您可以快速定位到所需文档，简化您的文件归档流程。
        </Paragraph>
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          请登录以开始您的文件管理之旅，或上传您的第一个文件。
        </Paragraph>
        <Space size="large" style={{ marginTop: '30px' }}>
          {/* 如果是 Next.js 项目，使用 Link 组件进行客户端路由跳转 */}
          <Link href="/login" passHref>
            <Button type="primary" size="large" icon={<LoginOutlined />}>
              登录
            </Button>
          </Link>
          <Link href="/upload" passHref>
            <Button size="large" icon={<UploadOutlined />}>
              上传文件
            </Button>
          </Link>
        </Space>
      </Card>
    </div>
  );
};

export default WelcomePage;
