const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Pet, Animal, Post } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/", withAuth, async (req, res) => {
    try {
        const userData = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password

        })

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {

        res.status(400).json(err);
    }
});

module.exports = router;