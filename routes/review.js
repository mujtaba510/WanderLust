const express = require("express");
const router = express.Router({ mergeParams: true });

const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require('../schema.js');
const { isLoggedIn, isReviewAuthor } = require('../middleware.js');

const { createReview, destroyReview } = require("../controllers/reviews.js");

// const listings = require("./listing.js");

// //listings routes
// app.use("/listings", listings);


// Review Schema Validation
const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
      
      // let errMsg = error.details.map((el) => el.message).join(",");
      // throw new ExpressError(400, errMsg);
  
      throw new ExpressError(400, error);
    }
    else
    {
      next();
    }
  }

// POST Route
router.post("/", isLoggedIn, validateReview, wrapAsync(createReview));
  
// Delete Route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(destroyReview));


module.exports = router;