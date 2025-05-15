const router = require('express').Router();
const messageController = require('../controllers/messageController');

// Middleware d'authentification
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Non authentifié' });
}

router.post('/', isAuthenticated, messageController.sendMessage);
router.get('/:userId', isAuthenticated, messageController.getMessages);

module.exports = router;
