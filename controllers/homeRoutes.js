const router = require('express').Router();
const { Animal, Pet, Post, PostPet } = require('../models');


router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [{ model: Animal},

         ],
        });
        const animals = petData.map((animal) =>
        animal.get({ plain: true })
        );
        

        res.render('homepage', {
            animals
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/animal/:id', async (req, res) => {
    // if (!req.session.loggedIn) {
    //     res.redirect('/login');
    // } else {
        try {
            const animalData = await Animal.findByPk(req.params.id, {
                include: [
                    {
                        model: Pet,
                        attributes: [
                            'id',
                            'pet_name',
                            'sex',
                            'is_stray',
                            'breed',
                        
                        ],
                    },
                ],
            });
            const animal = animalData.get({ plain: true });
            res.render('animal', { animal});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    // }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});








module.exports = router;