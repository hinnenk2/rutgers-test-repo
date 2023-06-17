const router = require('express').Router();
const sequelize = require('../config/connection');
//const { User } = require('../models');
const { Post, User, Comment } = require('../models');


router.get('/', (req, res) => {
  // console log session information
  //console.log(req.session);
  Post.findAll({
    attributes: [
      'id',
      'title',
      'contents',
      'created_at'
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
      // pass a single post object into the homepage template
      // note that we had res.json(dbPostData) now we use res.render
      // render is from handlebars engine
      // to avoid getting all of sequelize object, we need the plain rendering
      // get({ plain: true }) will get us the attributes that we defined.
     // console.log(dbPostData[0].get({ plain: true }));
      // We need full sequelize array
      const posts = dbPostData.map(post => post.get({ plain: true }));
      //res.render('homepage', dbPostData[0].get({ plain: true }));
      res.render('homepage', { 
        posts,
        loggedIn: req.session.loggedIn
       });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  } else {
    res.render('login');
  }
  
});

router.get('/signUp', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  } else {
    res.render('signUp');
  }
  
});


// logic for single-post handlebar
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'contents',
      'created_at'
      //[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      // serialize the data be visible as an object
      const post = dbPostData.get({ plain: true });

      // pass data to template
      res.render('single-post', { 
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