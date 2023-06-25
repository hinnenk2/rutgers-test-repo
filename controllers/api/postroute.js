const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {   //displays all user posts on homepage in order of creation date
    Post.findAll({
      order: [['created_at', 'DESC']], 
      attributes: [
        'id',
        'title',
        'contents',
        'created_at'
      ],
      include: [    //display the post's comments and their respective users
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
    .then(dbPostData => res.json(dbPostData)) //display all data if valid.
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // select x,y from post where x or y
router.get('/:id', (req, res) => {    //display posts and their user & comments by other users
    Post.findOne({
        where: {
        id: req.params.id
        },
        attributes: [
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
            res.status(404).json({ message: 'Invalid post' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.post('/',  withAuth, (req, res) => { //for user to add new posts
    Post.create({
      title: req.body.title,
      contents: req.body.contents,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))   //stores post if inputs are valid
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', withAuth,  (req, res) => {   //put requests are for updating a comment's title or contents
    Post.update(
        {
        title: req.body.title,
        contents: req.body.contents
        },
        {
        where: {
            id: req.params.id
        }
        }
    )
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'Invalid post' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

router.delete('/:id', withAuth,  (req, res) => {  //delete request for deleting from the database
    Post.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbPostData => {
      if (!dbPostData) {
          res.status(404).json({ message: 'Invalid post' });
          return;
      }
      res.json(dbPostData); //should yield an empty array
      })
      .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;