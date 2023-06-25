const router = require('express').Router();
const userRoutes = require('./userroute.js'); //setup for middleware
const postRoutes = require('./postroute');    //setup for middleware
const commentRoutes = require('./commentroute');  //setup for middleware

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;