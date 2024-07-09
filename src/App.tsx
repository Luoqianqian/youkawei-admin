import { Routes, Route } from 'react-router-dom';
import SideBar from './pages/global/SideBar';
import TopBar from './pages/global/TopBar';
import DashBoard from './pages/dashboard';
import Bar from './pages/bar';
import Calendar from './pages/calendar';
import Team from './pages/team';
import Contacts from './pages/contacts';
import Invoices from './pages/invoices';
import Form from './pages/form';
import Line from './pages/line';
import Pie from './pages/pie';
import Faq from './pages/faq';
import Geography from './pages/geography';
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
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
