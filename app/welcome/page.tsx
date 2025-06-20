// client/src/pages/WelcomePage.tsx
// 或者如果你使用 Next.js App Router，它可能是 app/page.tsx

import React from 'react';
import { Card, Button, Typography, Space, Row, Col } from 'antd';
import { LoginOutlined, UploadOutlined, ScanOutlined, FolderOpenOutlined } from '@ant-design/icons';
// 根据你的前端框架选择合适的 Link 组件
// 如果是 Create React App / Vite + react-router-dom:
import { Link } from 'react-router-dom';
// 如果是 Next.js (Pages Router 或 App Router):
// import Link from 'next/link';

const { Title, Paragraph } = Typography;

const WelcomePage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 120px)', // 减去 Header 和 Footer 的高度，让内容居中
      background: '#f0f2f5',
      padding: '20px',
      boxSizing: 'border-box' // 确保 padding 不会导致溢出
    }}>
      <Card
        style={{
          width: '100%',
          maxWidth: '800px', // 稍微增大最大宽度
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)', // 更明显的阴影
          borderRadius: '12px', // 更圆润的边角
          padding: '30px 40px', // 增加内边距
          textAlign: 'center'
        }}
        bordered={false} // 移除边框
      >
        <Title level={1} style={{ marginBottom: '15px', color: '#1890ff' }}>
          智能文件管家
        </Title>
        <Title level={4} style={{ color: '#666', marginTop: 0, marginBottom: '40px' }}>
          您的条形码文件管理系统
        </Title>

        <Paragraph style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', maxWidth: '600px', margin: '0 auto 40px' }}>
          告别繁琐的文件查找，借助强大的条形码技术，本系统助您轻松实现文件的数字化归档、快速检索与高效管理。
          无论身处何地，您的重要文档都触手可及。
        </Paragraph>

        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={6}>
            <Link to="/login">
              <Button
                type="primary"
                size="large"
                icon={<LoginOutlined />}
                style={{ width: '100%', height: '60px', borderRadius: '8px', fontSize: '18px' }}
              >
                立即登录
              </Button>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Link to="/upload">
              <Button
                size="large"
                icon={<UploadOutlined />}
                style={{ width: '100%', height: '60px', borderRadius: '8px', fontSize: '18px' }}
              >
                上传文件
              </Button>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Link to="/files">
              <Button
                size="large"
                icon={<FolderOpenOutlined />}
                style={{ width: '100%', height: '60px', borderRadius: '8px', fontSize: '18px' }}
              >
                查看文件
              </Button>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Link to="/scan">
              <Button
                size="large"
                icon={<ScanOutlined />}
                style={{ width: '100%', height: '60px', borderRadius: '8px', fontSize: '18px' }}
              >
                扫描条形码
              </Button>
            </Link>
          </Col>
        </Row>

        <Paragraph type="secondary" style={{ marginTop: '50px', fontSize: '14px' }}>
          开始您的数字化文件管理新体验！
        </Paragraph>
      </Card>
    </div>
  );
};

export default WelcomePage;
