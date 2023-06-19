const express = require('express'); //import express
const path = require('path');
const routes = require('./controllers'); //set up routes for middleware
const sequelize = require('./config/connection');  //import sequelize
const helpers = require('./utils/helpers'); //helper functions for page display

const exphbs = require('express-handlebars');   //allows handlesbars to act as the view engine
const hbs = exphbs.create({helpers}); 

const session = require('express-session');   //imports middleware that assigns a unique session to each user for the purpose of storing data and authentication
const SequelizeStore = require('connect-session-sequelize')(session.Store);   //provides apps with a storage element for each user session.

const app = express();  //initiate express
const PORT = process.env.PORT || 3001;

// set up express-session with cookies
const sess = {
    secret: 'secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));   //middleware for database connection

app.engine('handlebars', hbs.engine);   //initiate handlebars as the run engine for display
app.set('view engine', 'handlebars');

app.use(express.json());    //required for fetch request
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));    //allows access to js scripts in public folder

app.use(routes);    //allows access to controllers directory and its subsequent routes for page

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT: ' + PORT));
  });
