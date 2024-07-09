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
        <SideBar />
        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
