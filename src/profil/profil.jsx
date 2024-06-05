import React, { useState } from 'react';
import './profil.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'This is a short bio about John Doe.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-info">
        <label>Name:</label>
        {isEditing ? (
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        ) : (
          <p>{profile.name}</p>
        )}
      </div>
      <div className="profile-info">
        <label>Email:</label>
        {isEditing ? (
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        ) : (
          <p>{profile.email}</p>
        )}
      </div>
      <div className="profile-info">
        <label>Bio:</label>
        {isEditing ? (
          <textarea name="bio" value={profile.bio} onChange={handleChange}></textarea>
        ) : (
          <p>{profile.bio}</p>
        )}
      </div>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Profile;
