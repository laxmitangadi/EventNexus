import React from 'react';
import '../styles/UserProfile.css'; // Make sure the path matches your folder structure
import NavBar from './NavBar';
import Footer from './Footer';

const UserProfile = ({ user }) => {
  return (
    <div>
        <NavBar/>
    <div className="user-profile-wrapper">
      <div className="user-profile-card">
        {/* Header */}
        <div className="user-profile-header">
          <div className="user-avatar">
            {user.firstName[0]}{user.lastName[0]}
          </div>
          <div>
            <h2 className="user-name">{user.firstName} {user.lastName}</h2>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        {/* Details */}
        <div className="user-details-grid">
          <ProfileItem label="Second Name" value={user.secondName} />
          <ProfileItem label="Date of Birth" value={user.dob} />
          <ProfileItem label="Gender" value={user.gender} />
          <ProfileItem label="Phone" value={user.phone} />
          <ProfileItem label="City" value={user.city} />
          <ProfileItem label="District" value={user.district} />
          <ProfileItem label="State" value={user.state} />
          <ProfileItem label="Role" value={user.role} />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const ProfileItem = ({ label, value }) => (
  <div className="profile-item">
    <span className="profile-label">{label}</span>
    <span className="profile-value">{value || '-'}</span>
  </div>
);

export default UserProfile;
