const router = require('express').Router(); //middleware router
const homeRoutes = require('./homeroute.js'); //homepage router for GET requests
const dashboardRoutes = require('./dashboardroute.js'); //dashboard router for GET requests
const apiRoutes = require('./api'); //api directory for user activity

router.use('/', homeRoutes);  //homepage routing path
router.use('/api', apiRoutes);  //api directory route
router.use('/dashboard', dashboardRoutes);  //dashboard routing path

router.use((req, res) => {
    res.status(404).end();    //error code for "request not found"
  });

module.exports = router;