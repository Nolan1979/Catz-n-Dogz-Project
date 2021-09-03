const router = require('express').Router();
const  { Pet, Animal, Post } = require('../models');
const withAuth = require('../utils/auth');


// router.get('/', withAuth, (req, res) => {
//     User.findAll({
//         where: {
//             userId: req.session.userId
//         }
//     })
//     .then(dbUserData =>{
//         const users = dbUserData.map((user) => user.get({ plain: true }));

//         res.render("pet-details", {
//             layout: "dashboard",
//             users
//         });
//     })
//     .catch(err => {
//         res.redirect("login");
//     });
// });

router.get('/', withAuth, async (req, res) => {
    try {
        const petData = await Post.findAll({
            include: [
                {
                    model: Animal,
                    attributes: ['animal_name'],
                },
            ],
        });

        const animals = petData.map((animal) =>
            animal.get({ plain: true })
        );

        res.render('homepage', {
            layout: 'dashboard',
            animals,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router