import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Report from './components/report';
import AdminDashboard from './components/adminDashboard';
import Incident from './components/incident';
import Authentication from './components/authentication';

function App() {
  return (
    <div className="App">
        <HashRouter> {}
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/report" element={<Report />}/>
                <Route path="/admin" element={<AdminDashboard />}/>
                <Route path="/admin/:incidentID" element={<Incident />}/>
                <Route path="/signin" element={<Authentication />}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
