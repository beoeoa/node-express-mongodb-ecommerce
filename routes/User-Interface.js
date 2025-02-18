//importing express and configuring Router for all rendered views 
const express = require('express');
const router = express.Router();

//importing all the Controllers
const HomeController = require('../controllers/Home');
const ContactController = require('../controllers/Contact');
const ProductController = require('../controllers/Product');
const AboutController = require('../controllers/About');
const CategoryController = require('../controllers/Category');
const CartController = require('../controllers/Cart');
const WishController = require('../controllers/Wishlist');
const CheckController = require('../controllers/Checkout');
const TermsController = require('../controllers/Terms');
const PrivacyController = require('../controllers/Privacy');
const AccountController = require('../controllers/Myaccount');

//------------------Defining the Routes for the Front-End Section----------------------//

//Routes for HomeController
router.get('/',HomeController.getHome);

//Routes for all AboutController methods
router.get('/about-us',AboutController.getAboutUs);

//Routes for all ContactController methods
router.get('/contact',ContactController.getContact);

//Routes for all ProductController methods
router.get('/product',ProductController.getProduct);
router.get('/product-details',ProductController.getProductDetails);

//Routes for all CategoryController methods
router.get('/our-category',CategoryController.getCategory);

//Routes for all CartController methods
router.get('/your-cart',CartController.getCart);
 
//Routes for all WishController methods
router.get('/wishlist',WishController.getWishlist);

//Routes for all CheckController methods
router.get('/check-out',CheckController.getCheckOut);
 
//Routes for all PrivacyController methods
router.get('/privacy-policy',PrivacyController.getPrivacy);

//Routes for all TermsController methods
router.get('/terms-conditions',TermsController.getTerms);

//Routes for all AccountController methods
router.get('/my-account',AccountController.getLoginShow);



module.exports = router;