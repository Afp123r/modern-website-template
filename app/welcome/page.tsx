// client/src/pages/WelcomePage.tsx

import React from 'react';
// 如果你的项目使用 react-router-dom 进行路由管理
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // 垂直排列子元素
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh', // 占据视口高度的80%
      backgroundColor: '#f0f0f0', // 浅灰色背景
      fontFamily: 'Arial, sans-serif', // 简单字体
      color: '#333', // 深灰色文字
      textAlign: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#007bff' }}>
        欢迎来到文件管理系统
      </h1>
      <p style={{ fontSize: '1.2em', maxWidth: '600px', lineHeight: '1.6', marginBottom: '30px' }}>
        本系统旨在帮助您高效地管理和查找文件。
        通过条形码，您可以轻松追踪和访问您的文档。
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            minWidth: '120px'
          }}>
            登录
          </button>
        </Link>
        <Link to="/upload" style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            minWidth: '120px'
          }}>
            上传文件
          </button>
        </Link>
        <Link to="/files" style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '12px 25px',
            fontSize: '1.1em',
            backgroundColor: '#ffc107',
            color: '#333',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            minWidth: '120px'
          }}>
            查看文件
          </button>
        </Link>
      </div>

      <p style={{ fontSize: '0.9em', color: '#666', marginTop: '50px' }}>
        开始您的数字化文件管理新体验！
      </p>
    </div>
  );
};

export default WelcomePage;
