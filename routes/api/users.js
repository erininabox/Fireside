const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/userController');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.put('/:id', isAuthorized, usersCtrl.update);
router.get('/', isAuthorized, usersCtrl.getAll);
router.get('/:id', isAuthorized, usersCtrl.getOne);

function isAuthorized(req, res, next) {
    if (req.user) 
        return next();
    res.redirect('/api/users/');
}

module.exports = router;