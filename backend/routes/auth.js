const router = require('express').Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  authController.successRedirect
);

// GitHub OAuth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  authController.successRedirect
);

// Logout
router.get('/logout', authController.logout);

// User info
router.get('/user', authController.getUser);

module.exports = router;
