const express = require('express');
const { getArticles, createArticle, updateArticle, deleteArticle, getArticleById } = require('../controllers/articleController');
const router = express.Router();

router.get('/articles', getArticles);
router.post('/articles', createArticle);
router.delete('/articles/:id', deleteArticle);
router.put('/articles/:id', updateArticle);
router.get('/articles/:id', getArticleById);

module.exports = router;
