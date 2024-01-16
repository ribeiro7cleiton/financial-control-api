const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const categoryController = require('../controllers/categoryController');
const subcategoryController = require('../controllers/subcategoryController');
const expenseController = require('../controllers/expenseController');
const authenticateJWT = require('../middleware/authenticateJWT');

// Rotas de autenticação
router.post('/register', authController.register);
router.post('/login', authController.login);

// Rotas para gerenciar categorias
router.get('/categories', authenticateJWT, categoryController.getCategories);
router.post('/categories', authenticateJWT, categoryController.createCategory);

// Rotas para gerenciar subcategorias
router.get('/subcategories', authenticateJWT, subcategoryController.getSubcategories);
router.post('/subcategories', authenticateJWT, subcategoryController.createSubcategory);

// Rotas para gerenciar despesas
router.get('/expenses', authenticateJWT, expenseController.getExpenses);
router.post('/expenses', authenticateJWT, expenseController.createExpense);

module.exports = router;
