const router = require("express").Router()
const homeRoutes = require('./homeRoutes')
const loginRoutes = require('./loginRoutes')
const dashboardRoutes = require('./dashboardRoutes')
const registerRoutes = require('./registerRoutes')
const apiRoutes = require('./api')

router.use('/', homeRoutes)
router.use('/login', loginRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/register', registerRoutes)
router.use('/api', apiRoutes)
router.use('*', homeRoutes)

module.exports = router;