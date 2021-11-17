const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/userController');
/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/', usersCtrl.getAll);
router.get('/:id', usersCtrl.getOne);

/*---------- Protected Routes ----------*/




module.exports = router;