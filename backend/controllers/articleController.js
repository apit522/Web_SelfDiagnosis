const knex = require('knex')(require('../knexfile').development);
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('image');

const getArticles = (req, res) => {
    knex.select('*').from('articles')
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
};

const createArticle = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        const { title, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;
        knex('articles').insert({ title, content, image })
            .then(result => {
                res.status(201).json({ id: result[0], title, content, image });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    });
};

const updateArticle = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        const { id } = req.params;
        const { title, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null;

        const updatedArticle = { title, content };
        if (image) updatedArticle.image = image;

        knex('articles').where({ id }).update(updatedArticle)
            .then(() => {
                res.json({ message: 'Article updated successfully' });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    });
};

const getArticleById = (req, res) => {
    const { id } = req.params;
    knex('articles').where({ id }).first()
        .then(article => {
            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }
            res.json(article);
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
};

const deleteArticle = (req, res) => {
    const { id } = req.params;
    knex('articles').where({ id }).del()
        .then(() => {
            res.json({ message: 'Article deleted successfully' });
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        });
};

module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticleById
};
