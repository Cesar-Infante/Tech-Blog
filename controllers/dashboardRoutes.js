const router = require('express').Router();

router.get('/', async (req, res) => {

    try {

        if(!req.session.loggedin) {
            return res.redirect('/login')
        }
        res.render('dashboard');
    } catch (err) {
        res.status(500).send(err)
    }
});

module.exports = router;