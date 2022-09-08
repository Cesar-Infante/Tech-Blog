const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        res.render('register');
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = router;