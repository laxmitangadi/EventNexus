import UserProfile from '../components/UserProfile'; // Make sure the path is correct

const mockUser = {
  firstName: 'Aarav',
  secondName: 'Raj',
  lastName: 'Mehta',
  dob: '2000-05-12',
  gender: 'Male',
  email: 'aarav.mehta@example.com',
  phone: '9876543210',
  city: 'Mumbai',
  district: 'Mumbai Suburban',
  state: 'Maharashtra',
  role: 'attendee',
};

function ProfilePage() {
  return <UserProfile user={mockUser} />;
}

export default ProfilePage;
