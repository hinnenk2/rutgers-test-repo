const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {   //display the homepage upon login/sign in.
  Post.findAll({                  //refers to the Post.js model's attributes for displaying on the homepage
    attributes: [
      'id',
      'title',
      'contents',
      'created_at'
    ],
    include: [
      {
        model: Comment,   //refers to the Comment.js model 
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']    //displays the username of the Post's owner
      }
    ]
  })
    .then(dbPostData => {   //Once all the Post data has been validated, it gets posted to the homepage
      const posts = dbPostData.map(post => post.get({ plain: true }));    
      res.render('homepage', {    //renders the post data onto the homepage as a function of the handlebars engine
        posts,
        loggedIn: req.session.loggedIn  //user must be logged in to upload post to homepage
       });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {     //if user is logged in, redirect them to homepage, otherwise render the login button
    res.redirect('/');
    return;
  } else {
    res.render('login');
  }
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {     //if user is logged in, redirect them to homepage, otherwise render the signup button
    res.redirect('/');
    return;
  } else {
    res.render('signup');
  }
});

router.get('/post/:id', (req, res) => {   //displays the comments of a specific post off the homepage
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [   //attributes of the post to be displayed
      'id',
      'title',
      'contents',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Post not found' });
        return;
      }

      const post = dbPostData.get({ plain: true });   

      res.render('singlepost', {   //makes the post visible once confirmed as valid
        post,
        loggedIn: req.session.loggedIn
     });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;