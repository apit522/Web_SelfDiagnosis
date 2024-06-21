import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import '../assets/style/Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const { username, email } = response.data;
            setProfileData({ username, email });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setEditMode(true);
        setFormData({
            username: profileData.username,
            email: profileData.email,
            password: '' // Untuk mengosongkan password agar tidak ditampilkan di form
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put('http://localhost:3001/profile', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setMessage('Profile updated successfully');
            setProfileData({
                username: response.data.username,
                email: response.data.email,
                password: response.data.password // Jika ada perubahan password, perbarui di sini
            });
            setEditMode(false);
        } catch (error) {
            setMessage('Error updating profile');
            console.error('Error updating profile:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
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
                                {/* Tampilkan password jika diperlukan */}
                                {/* Perlu dicatat bahwa menampilkan password tidak disarankan dalam aplikasi produksi */}
                                {profileData.password && (
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="text" className="form-control" value={profileData.password} readOnly />
                                    </div>
                                )}
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
                                {/* Input password hanya untuk keperluan perubahan password */}
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
        </>
    );
};

export default Profile;
