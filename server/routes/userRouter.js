const Router = require('express')
const router = new Router() 
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/auth',authMiddleware,UserController.check)
router.post('/login',UserController.login)
router.post('/registration',UserController.registration)


module.exports = router