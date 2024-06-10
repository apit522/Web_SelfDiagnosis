// src/page/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import '../assets/style/Dashboard.css';

const Dashboard = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:3001/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:3001/articles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setTitle('');
            setContent('');
            setImage(null);
            navigate('/artikel');
        } catch (error) {
            console.error('Error creating article:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/articles/${id}`);
            setArticles(articles.filter((article) => article.id !== id));
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

    return (
        <div className="dashboard container-fluid p-0">
            <Navbar />
            <div className="container">
                <h1 className="mt-5">Create a New Article</h1>
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
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <h2 className="mt-5">Articles</h2>
                <ul className="list-group">
                    {articles.map((article) => (
                        <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <h5>{article.title}</h5>
                                <p>{article.content}</p>
                            </div>
                            <button className="btn btn-danger" onClick={() => handleDelete(article.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
