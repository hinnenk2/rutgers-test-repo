const withAuth = (req, res, next) => {    //redirects user to login page if not currently logged in, required to start the app
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;