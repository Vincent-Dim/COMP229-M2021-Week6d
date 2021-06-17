import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET login page - --display login page when /login is appended to local address. */
router.get('/login', DisplayLoginPage);

/* PROCESS login page - --display login page when user clicks the login button. */
router.get('/login', DisplayLoginPage);

/* GET resister page - --display register page when /register is appended to local address. */
router.get('/register', DisplayRegisterPage);



//module.exports = router;
