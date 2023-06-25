const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {        //User can have many posts
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {      //A post can only belong to a single user that started the post
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {   //Each comment belongs to its respective user
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {   //Each comment belngs to its respective post
    foreignKey: 'post_id', 
});

User.hasMany(Comment, {     //A user can have many comments
    foreignKey: 'user_id',
  });

Post.hasMany(Comment, {     //A post can have many follow-up comments
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment};
