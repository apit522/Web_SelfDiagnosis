import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import '../assets/style/Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3001/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfileData(response.data);
                setFormData({
                    username: response.data.username,
                    email: response.data.email,
                    password: ''
                });
            } catch (error) {
                console.error('Failed to fetch user data', error);
            }
        };
        fetchUserData();
    }, []);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:3001/profile', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setMessage('Profile updated successfully');
            setProfileData({
                ...profileData,
                username: formData.username,
                email: formData.email
            });
            localStorage.setItem('username', formData.username);
            localStorage.setItem('email', formData.email);
            if (formData.password) {
                localStorage.setItem('password', formData.password);
            }
            setEditMode(false);
            window.dispatchEvent(new Event("storage"));  // To update Navbar
        } catch (error) {
            console.error('Failed to update profile', error);
            setMessage('Failed to update profile');
        }
    };

    return (
        <div className="home container-fluid p-0">
            <Navbar />
            <div className="container navbar-content">
            </div>
            <div className="bg-lightblue p-5">
                <div className="container mt-5">
                    <div className="card profile-card">
                        <div className="card-body">
                            <h2 className="card-title">Profile Information</h2>
                            {!editMode ? (
                                <>
                                    <div className="mb-3">
                                        <label className="form-label">Username</label>
                                        <input type="text" className="form-control" value={profileData.username} readOnly />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" value={profileData.email} readOnly />
                                    </div>
                                    <button className="btn btn-primary" onClick={handleEdit}>Edit Data</button>
                                </>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">New Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </form>
                            )}
                            {message && <div className="alert alert-info mt-3">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
