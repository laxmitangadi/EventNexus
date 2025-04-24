import React from 'react';
import '../styles/UserProfile.css';
import NavBar from './NavBar';
import Footer from './Footer';

const UserProfile = (props) => {
  const user = props.user || JSON.parse(localStorage.getItem('user')) || {};

  const initials = user.name
    ? user.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()
    : '';


  

  return (
    <div>
      <NavBar />
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          {/* Header */}
          <div className="user-profile-header">
            <div className="user-avatar">{initials}</div>
            <div>
              <h2 className="user-name">{user.name}</h2>
              <p className="user-email">{user.email}</p>
            </div>
          </div>

          {/* Details */}
          <div className="user-details-grid">
            <ProfileItem label="Phone" value={user.phone} />
            <ProfileItem label="Gender" value={user.gender} />
            <ProfileItem label="Date of Birth" value={formatDate(user.dob)} />
            <ProfileItem label="City" value={user.city} />
            <ProfileItem label="State" value={user.state} />
            <ProfileItem label="Pincode" value={user.pincode} />
            <ProfileItem label="Status" value={user.status} />
            <ProfileItem label="Role ID" value={user.roleid} />
            <ProfileItem label="Interest ID" value={user.interest_id} />
            <ProfileItem label="Created At" value={formatDate(user.created_at)} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="profile-item">
    <span className="profile-label">{label}</span>
    <span className="profile-value">{value || '-'}</span>
  </div>
);

const formatDate = (dateString) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

export default UserProfile;
