import { Routes, Route } from 'react-router-dom';
import SideBar from './views/global/SideBar';
import TopBar from './views/global/TopBar';
import DashBoard from './views/dashboard';
import Bar from './views/bar';
import Calendar from './views/calendar';
import Team from './views/team';
import Contacts from './views/contacts';
import Invoices from './views/invoices';
import Form from './views/form';
import Line from './views/line';
import Pie from './views/pie';
import Faq from './views/faq';
import Geography from './views/geography';
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
