//importing express and configuring Router for all admin related view
const express = require('express');
const router = express.Router();

//importing Authentication Middleware
const AuthMiddleware = require('../middleware/Auth');

//importing all the admin-panel related controllers
const LoginController = require('../controllers/admin/Login');
const DashboardController = require('../controllers/admin/Dashboard');



//------------------Defining the Routes for the Back-End Admin panel----------------------//

//Routes for Login Controller
router.get('/',AuthMiddleware.verified,LoginController.getLogInForm);
router.post('/check-login',AuthMiddleware.verified,LoginController.postAdminLogIn);

router.get('/change-password',AuthMiddleware.verified,LoginController.getChangePassWord);
router.post('/change-password',AuthMiddleware.verified,LoginController.getChangePassWord);

router.get('/admin-logout',AuthMiddleware.notVerified,LoginController.adminLogOut);


//Routes for Dashboard Controller
router.get('/dashboard',AuthMiddleware.notVerified,DashboardController.getAdminDashboard);


 

module.exports = router ;