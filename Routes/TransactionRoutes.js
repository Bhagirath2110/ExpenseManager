const router = require('express').Router();
// const transactionController = require('../controllers/TransactionController');
const transactionController = require("../Controllers/TransactionController")
router.get('/transaction', transactionController.getAllTransaction);
router.get('/transactions', transactionController.getAllTransaction);
router.get('/transaction/:id', transactionController.getTransactionById);
router.get('/income', transactionController.getIncome);
router.get('/expense', transactionController.getExpense);
router.post('/transaction', transactionController.addTransaction);
router.put('/transaction/:id', transactionController.updateTransaction);
router.delete('/transaction/:id', transactionController.deleteTransaction);

module.exports = router;