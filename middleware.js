
let Listing  = require('./models/listing.js');
let Review  = require('./models/review.js');

module.exports.isLoggedIn = (req,res,next)=>{
    // console.log(req.user);
    if(!req.isAuthenticated())
    {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to proceed.!");
        return res.redirect("/login");
    }

    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl = req.session.redirectUrl;
    }

    next();
}

module.exports.isOwner = async (req,res,next)=>{

    let {id} = req.params;
    let newlisting = await Listing.findById(id).populate("owner");
    if(!newlisting.owner._id.equals(res.locals.currUser._id))
    {
      req.flash("error","You are not authorized to perform this action!");
      return res.redirect(`/listings/${id}`);
    }

    next();
}



module.exports.isReviewAuthor = async (req,res,next)=>{

    let {id, reviewId} = req.params;
    let newReview = await Review.findById(reviewId).populate("author");
    let newlisting = await Listing.findById(id).populate("owner");

    if(!newReview.author._id.equals(res.locals.currUser._id) && !newlisting.owner._id.equals(res.locals.currUser._id))
    {
      req.flash("error","You are not authorized to perform this action!");
      return res.redirect(`/listings/${id}`);
    }

    next();
}