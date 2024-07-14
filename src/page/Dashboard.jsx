import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import '../assets/style/Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [articles, setArticles] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false); // State untuk menentukan apakah pengguna adalah admin
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT
                    setIsAdmin(decodedToken.role === 1); // Set state isAdmin jika role = 1 (admin)
                }
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        };

        fetchData();

        // Fetch articles
        axios.get('http://localhost:3001/api/articles')
            .then(response => setArticles(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        if (isEditing) {
            axios.put(`http://localhost:3001/api/articles/${editId}`, formData)
                .then(() => {
                    setArticles(articles.map(article => (article.id === editId ? { ...article, title, content, image: image ? URL.createObjectURL(image) : article.image } : article)));
                    setTitle('');
                    setContent('');
                    setImage(null);
                    setIsEditing(false);
                    setEditId(null);
                    navigate('/artikel');
                })
                .catch(error => console.error(error));
        } else {
            axios.post('http://localhost:3001/api/articles', formData)
                .then(response => {
                    setArticles([...articles, response.data]);
                    setTitle('');
                    setContent('');
                    setImage(null);
                    navigate('/artikel');
                })
                .catch(error => console.error(error));
        }

    };

    const handleEdit = (article) => {
        setTitle(article.title);
        setContent(article.content);
        setImage(null);
        setIsEditing(true);
        setEditId(article.id);
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/api/articles/${id}`)
            .then(() => {
                setArticles(articles.filter(article => article.id !== id));
            })
            .catch(error => console.error(error));
    };

    if (!isAdmin) {
        return (
            <div className="home container-fluid p-0">
                <Navbar />
                <div className="container navbar-content"></div>
                <div className="container">
                    <h1>Unauthorized Access</h1>
                    <p>Only admin can access this page.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="home container-fluid p-0">
            <Navbar />
            <div className="container navbar-content"></div>
            <div className="container">
                <h1 className="mt-5">{isEditing ? 'Edit Article' : 'Create a New Article'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea
                            className="form-control"
                            id="content"
                            rows="5"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">{isEditing ? 'Update' : 'Submit'}</button>
                </form>

                <h2 className="mt-5">Articles</h2>
                <ul className="list-group">
                    {articles.map((article) => (
                        <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{article.title}</h5>
                                <p>{article.content}</p>
                            </div>
                            <div>
                                <button className="btn btn-warning me-2" onClick={() => handleEdit(article)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(article.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
