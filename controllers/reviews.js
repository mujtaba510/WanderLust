const Listing = require("../models/listing.js");
const Review = require("../models//review.js");


module.exports.createReview = async (req, res) => {
    let {id} = req.params;
  
    let listing = await Listing.findById(id);
    let newReview = new Review(req.body.review)
    newReview.author = req.user._id;
    // console.log(newReview);
  
    listing.reviews.push(newReview);
  
    await newReview.save();
    await listing.save();
  
    req.flash("sucess", "New Review Created");

    // console.log("saved");
    res.redirect(`/listings/${id}`);
  
  
};


module.exports.destroyReview = async (req,res)=>{
    let {id, reviewId} = req.params;
  
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);
  
    req.flash("sucess", "Review Deleted");

    res.redirect(`/listings/${id}`);
    
  
};