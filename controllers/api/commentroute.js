const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/',  (req, res) => {  //displays the comments of a post in order of creation date
    Comment.findAll({
        order: [['created_at', 'DESC']]   
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {    //allows a logged-in user to post new comments
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        post_id: req.body.post_id,
        user_id: req.session.user_id  //required for displaying the user of each comment
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

  router.delete('/:id', withAuth, (req, res) => {   //delete request for comments similar to postroute.js
    Comment.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'Invalid post' });
            return;
        }
        res.json(dbPostData);
        })
        .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;