const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const User = require("../models/user.js");

const { renderSignupForm, signUp, renderLoginForm, logIn, logOut } = require("../controllers/users.js");

const {saveRedirectUrl} = require('../middleware.js');

const passport = require("passport");


// SignUp
router.route("/signup")
.get(renderSignupForm)
.post(wrapAsync(signUp))

// LogIn
router.route("/login")
.get(renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true } ), wrapAsync(logIn));


//logout
router.get("/logout", logOut);


module.exports = router;