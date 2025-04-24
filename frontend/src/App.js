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
import UserProfileWrapper from './components/UserProfileWrapper';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthorizedPage from './components/UnauthorizedPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        
        {/* Regular user routes (roleId 2) */}
        <Route element={<ProtectedRoute allowedRoles={[2]} />}>
          <Route path="/profile" element={<UserProfileWrapper />} />
          <Route path="/eventspage" element={<EventsPage />} />
          <Route path="/eventdetails" element={<EventDetails />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          <Route path="/successpage" element={<SuccessPage />} />

        </Route>
        
        {/* Event organizer routes (roleId 3) */}
        <Route element={<ProtectedRoute allowedRoles={[3]} />}>
          <Route path="/eventorganizer" element={<EventOrganizerHome />} />
          <Route path="/eventcreate" element={<EventCreate />} />
        </Route>
        
        {/* Sponsor routes (roleId 4) */}
        <Route element={<ProtectedRoute allowedRoles={[4]} />}>
          <Route path="/sponsordashboard" element={<SponsorDashboard />} />
          <Route path="/sponsoreventslist" element={<SponsorEventList />} />
          <Route path="/sponsoreventpage" element={<SponsorEventPage />}/>
        </Route>
        
        {/* Admin routes (if you have any)
        <Route element={<ProtectedRoute allowedRoles={[1]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route> */}
        
        {/* Routes accessible by multiple roles */}
        <Route element={<ProtectedRoute allowedRoles={[1, 2, 3, 4]} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;