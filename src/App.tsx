import { Routes, Route } from 'react-router-dom';
import SideBar from './pages/global/SideBar';
import TopBar from './pages/global/TopBar';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <>
      <div className="app">
        <TopBar />
        <main className="content">
          <SideBar />
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
