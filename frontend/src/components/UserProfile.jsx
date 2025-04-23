import React, { useState } from 'react';
import '../styles/UserProfile.css';
import NavBar from './NavBar';
import Footer from './Footer';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // TODO: Connect this to backend later
    console.log('Saved data:', formData);
    setIsEditing(false);
  };

  return (
    <div>
      <NavBar />
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          <div className="user-profile-header">
          <div className="user-avatar">
  {formData.firstName[0]}{formData.lastName[0]}
</div>

            <div className="user-profile-header-content">
              <div>
                <h2 className="user-name">{formData.firstName} {formData.lastName}</h2>
                <p className="user-email">{formData.email}</p>
                <ProfileItem label="Email" name="email" value={formData.email} onChange={handleChange} isEditing={isEditing} />

              </div>
              {!isEditing ? (
                <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>Edit</button>
              ) : (
                <button className="edit-profile-btn" onClick={handleSave}>Save</button>
              )}
            </div>
          </div>

          <div className="user-details-grid">
  <ProfileItem label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="Second Name" name="secondName" value={formData.secondName} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="Gender" name="gender" value={formData.gender} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="Phone" name="phone" value={formData.phone} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="City" name="city" value={formData.city} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="District" name="district" value={formData.district} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="State" name="state" value={formData.state} onChange={handleChange} isEditing={isEditing} />
  <ProfileItem label="Role" name="role" value={formData.role} onChange={handleChange} isEditing={isEditing} />
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

const ProfileItem = ({ label, name, value, onChange, isEditing }) => (
  <div className="profile-item">
    <span className="profile-label">{label}</span>
    {isEditing ? (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="profile-input"
      />
    ) : (
      <span className="profile-value">{value || '-'}</span>
    )}
  </div>
);

export default UserProfile;
