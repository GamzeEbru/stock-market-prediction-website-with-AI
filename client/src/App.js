import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "../src/components/Main";
import Signin_mode from "../src/components/signin_up/Signin_mode";
import Piyasa from "../src/Pages/Makul/Piyasa";
import DailyData from "../src/Pages/Makul/DailyData";
import Contact from "../src/Pages/FooterItems/Contact";
import AboutUs from "../src/Pages/FooterItems/AboutUs";
import AccountPage from "./Pages/Account/AccountPage";
import PiyasaTablolar from './Pages/Makul/PiyasaTablolar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/login" element={<Signin_mode />} />
          <Route path="/piyasa" element={<Piyasa />} />
          <Route path="/piyasa/DailyData" element={<DailyData />} />
          <Route path="/dailydata" element={<DailyData />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/account' element={<AccountPage />} />
          <Route path='/tables' element={<PiyasaTablolar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
