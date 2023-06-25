const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/', (req, res) => {    //adds new user to database once they've made their login info
    User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
      
        res.json(dbUserData);
      });
    })
  });

router.post('/login', (req, res) => {
    User.findOne({    //acquires user from the database
      where: {
        username: req.body.username
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'Invalid user' });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);  //password entered by user on the front end is compared with password that was initially generated.  
      if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password, try again' });
          return;
        }  
      req.session.save(() => { 
        req.session.user_id = dbUserData.id;  //state variables for session
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });  
  });

router.post('/logout', (req, res) => {  //logout ends user session
if (req.session.loggedIn) {
  req.session.destroy(() => {
    res.status(204).end();
  });
}
else {
  res.status(404).end();
}
});

  module.exports = router;