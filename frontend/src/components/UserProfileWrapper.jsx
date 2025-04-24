import React from 'react';
import UserProfile from './UserProfile';
import NavBar from './NavBar';
import Footer from './Footer';

const UserProfileWrapper = () => {
  let user = null;

  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error('Failed to parse user from localStorage:', error);
  }

  return user ? (
    <div>
      <NavBar />
      <UserProfile user={user} />
      <Footer />
    </div>
  ) : (
    <div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
      <NavBar />
      <div style={{minHeight: '60vh' }}>
        <h2>User not logged in</h2>
        <p>Please <a href="/login" style={{ color: '#ddd' }}>login</a> to view your profile.</p>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfileWrapper;
