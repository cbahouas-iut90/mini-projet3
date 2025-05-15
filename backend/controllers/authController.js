exports.successRedirect = (req, res) => {
    res.redirect('/success');
  };
  
  exports.logout = (req, res) => {
    req.logout(() => {
      res.redirect('/');
    });
  };
  
  exports.getUser = (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).json({ message: 'Non authentifié' });
    }
  };
  