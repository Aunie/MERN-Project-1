const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const {signupSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require('../middlewares/auth-middleware');

// 1st Method
// router.get("/", (req, res) => {
//     res.status(200).send("Welcome to the MERN Stack Development using auth-router!");
// });

// 2nd Method
router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register)
                         .post(validate(signupSchema),authControllers.register);
router.route("/login").post(authControllers.login)
                      .post(validate(loginSchema),authControllers.register);
router.route("/user").get(authMiddleware, authControllers.user);



module.exports = router;