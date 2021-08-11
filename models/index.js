const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// The constraint we impose here is that a post can belong to one user, but not many users
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };