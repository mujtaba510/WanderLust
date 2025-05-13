const User = require("../models/user.js");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs")
};

module.exports.signUp = async (req,res)=>{
    try{
        let {username, email, password} = req.body;
        let newUser = new User({
            email,
            username,  
        });

        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if(err)
            {
                return next(err);
            }
            
            req.flash("sucess", "Welcome To WanderLust")
            res.redirect("/listings");
        })
    }
    catch(err){
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs")
};

module.exports.logIn = async (req,res)=>{
    req.flash("sucess", "Welcome To WanderLust");
    let redirect = res.locals.redirectUrl || '/listings';
    res.redirect(redirect);
};

module.exports.logOut = (req, res, next) => {
    
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("sucess", "You are logged out");
        res.redirect("/listings");
    });

};