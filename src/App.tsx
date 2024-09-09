import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, Space, theme } from 'antd';
import SideBar from './components/SideBar.tsx';
import TopBar from './components/TopBar.tsx';
import Home from './pages/Home';
import { useTheme } from './context/ThemeContext.tsx';
import './index.css';
import Orders from './pages/Orders/index.tsx';
import Posts from './pages/Posts/index.tsx';
import Products from './pages/Products/index.tsx';
import Users from './pages/Users/index.tsx';

function App() {
  const { mode } = useTheme();
  console.log(mode);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ACA092',
        },
        algorithm:
          mode === 'default' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <div className="app">
        <TopBar />
        <main className="content">
          <Space>
            <SideBar />
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </div>
          </Space>
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
