const Pet = require('./Pet');
const Animal = require('./Animal');
const User = require('./User');
const Post = require('./Post');
const PostPet = require('./PostPet');





Pet.belongsTo(Animal, {
    foreignKey: 'animal_id',
})

Animal.hasMany(Pet, {
    foreignKey: 'animal_id',
})

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasMany(Animal, {
})

Post.hasMany(Pet,{
    foreignKey: 'animal_id',
})

Pet.belongsToMany(Post, {through: PostPet})

Post.belongsToMany(Pet, {through: PostPet})


module.exports = {
    Pet,
    Animal, 
    User,
    Post,
    PostPet,
};




