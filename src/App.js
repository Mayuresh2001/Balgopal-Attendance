import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Registration from './pages/Registeration';
import UserActions from './pages/UserActions';
import MarkAttendance from './pages/MarkAttendance';
import ReportGeneration from './pages/ReportGeneration';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}
        />

        <Route
          path="/user-actions"
          element={<UserActions />}
        />

        <Route
          path="/register-balgopal"
          element={<Registration />}
        />
        <Route
          path="/mark-attendance"
          element={<MarkAttendance />}
        />
        <Route
          path="/report-generation"
          element={<ReportGeneration />}
        />
      </Routes>
    </div>
  );
}

export default App;
