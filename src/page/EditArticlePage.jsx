import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('/articles', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/articles/update`, { id: editingId, title, content }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      } else {
        await axios.post(`/articles/create`, { title, content }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      }
      fetchArticles();
      setTitle('');
      setContent('');
      setEditingId(null);
    } catch (error) {
      console.error('Error handling submit:', error);
    }
  };

  const handleEdit = (article) => {
    setTitle(article.title);
    setContent(article.content);
    setEditingId(article.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/articles/delete`, {
        data: { id },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h1>Edit Articles</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required></textarea>
        <button type="submit">{editingId ? 'Update' : 'Create'} Article</button>
      </form>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <button onClick={() => handleEdit(article)}>Edit</button>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditArticlePage;
