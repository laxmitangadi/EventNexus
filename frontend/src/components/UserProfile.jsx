import React, { useState,  } from 'react';
import '../styles/UserProfile.css';
import NavBar from './NavBar';
import Footer from './Footer';
// import api from '../services/api';
import axios from 'axios';
const UserProfile = (props) => {
  // Get user ID from localStorage if not in props
  const userIdFromStorage = localStorage.getItem('userid');
  const userFromLocalStorage = props.user || JSON.parse(localStorage.getItem('user')) || {};
  
  const [user, setUser] = useState({
    ...userFromLocalStorage,
    _id: userFromLocalStorage._id || userIdFromStorage
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    ...user,
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    gender: user.gender || '',
    dob: user.dob || '',
    city: user.city || '',
    state: user.state || '',
    pincode: user.pincode || '',
    status: user.status || 'active',
    roleid: user.roleid || 1,
    interest_id: user.interest_id || null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(prev => !prev);
  };

  const handleSaveChanges = async () => {
    try {
      if (!user._id) {
        throw new Error('User ID is missing');
      }

      const response = await axios.put('http://localhost:5000/api/update', {
        userId: user._id,  // Use the persisted _id
        updatedUser: updatedUser
      });

      if (response.data.success) {
        // Update both state and localStorage
        const newUserData = { ...user, ...updatedUser };
        setUser(newUserData);
        localStorage.setItem('user', JSON.stringify(newUserData));
        setIsEditing(false);
      } else {
        alert(response.data.message || 'Update failed');
      }
    } catch (error) {
      console.error('Update error:', error);
      alert(error.response?.data?.message || error.message || 'An error occurred');
    }
  };

  const initials = user.name
    ? user.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()
    : '';

  return (
    <div>
      <NavBar />
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          <div className="user-profile-header">
            <div className="user-avatar">{initials}</div>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name || ''}
                  onChange={handleInputChange}
                  className="user-name-edit"
                />
              ) : (
                <h2 className="user-name">{user.name}</h2>
              )}
              <p className="user-email">{user.email}</p>
            </div>
            <button onClick={handleEditToggle} className="edit-button">
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

           {/* Details */}
           <div className="user-details-grid">
            <ProfileItem label="Phone" value={isEditing ? (
              <input type="text" name="phone" value={updatedUser.phone} onChange={handleInputChange} />
            ) : user.phone} />
            <ProfileItem label="Gender" value={isEditing ? (
              <input type="text" name="gender" value={updatedUser.gender} onChange={handleInputChange} />
            ) : user.gender} />
            <ProfileItem label="Date of Birth" value={isEditing ? (
              <input type="date" name="dob" value={updatedUser.dob || ''} onChange={handleInputChange} />
            ) : formatDate(user.dob)} />
            <ProfileItem label="City" value={isEditing ? (
              <input type="text" name="city" value={updatedUser.city} onChange={handleInputChange} />
            ) : user.city} />
            <ProfileItem label="State" value={isEditing ? (
              <input type="text" name="state" value={updatedUser.state} onChange={handleInputChange} />
            ) : user.state} />
            <ProfileItem label="Pincode" value={isEditing ? (
              <input type="text" name="pincode" value={updatedUser.pincode} onChange={handleInputChange} />
            ) : user.pincode} />
            <ProfileItem label="Status" value={isEditing ? (
              <input type="text" name="status" value={updatedUser.status} onChange={handleInputChange} />
            ) : user.status} />
            <ProfileItem label="Role ID" value={user.roleid} />
            <ProfileItem label="Interest ID" value={user.interest_id} />
            <ProfileItem label="Created At" value={formatDate(user.created_at)} />
          </div>

          {isEditing && (
            <div className="save-changes">
              <button onClick={handleSaveChanges} className="save-button">Save Changes</button>
            </div>
          )}
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
