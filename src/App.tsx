import { Routes, Route } from 'react-router-dom';
import SideBar from './components/sidebar';
import TopBar from './components/topbar';
import DashBoard from './views/dashboard';
import { Space } from 'antd';
import './index.css';

function App() {
  return (
    <>
      <div className="app">
        <Space>
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes>
          </main>
        </Space>
      </div>
    </>
  );
}

export default App;
