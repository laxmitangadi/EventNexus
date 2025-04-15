import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import EventsPage from './components/EventsPage';
import EventDetails from './components/EventDetails';
import PaymentPage from './components/PaymentPage';
import EventOrganizerHome from './components/EventOrganizerHome';
import EventCreate from './components/EventCreate';
import SponsorEventPage from './components/SponsorEventPage';
import SponsorDashboard from './components/SponsorDashboard';
import SponsorEventList from './components/SponsorEventList';
import SuccessPage from './components/SuccessPage';
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/eventspage" element={<EventsPage />} />
        <Route path="/eventdetails" element={<EventDetails />} />
        <Route path="/paymentpage" element={<PaymentPage />} />
        <Route path="/eventorganizer" element={<EventOrganizerHome />} />
        <Route path="/eventcreate" element={<EventCreate />} />
        <Route path="/sponsoreventpage" element={<SponsorEventPage />} />
        <Route path="/sponsordashboard" element={<SponsorDashboard />} />
        <Route path="/sponsoreventslist" element={<SponsorEventList />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

