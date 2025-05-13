const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require('../schema.js');
const { isLoggedIn, isOwner } = require("../middleware.js");
const { index,showListing, renderNewForm, createListing, renderEditForm, updateListing, destroyListing } = require("../controllers/listings.js");
const { storage } = require('../cloudConfig.js');

// npm i multer 
const multer  = require('multer')
const upload = multer({ storage })     // upload.single('listing[image]')

// Listing Schema Validation
const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
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



router.route("/")
// Index Route
.get(wrapAsync(index))
// Create Route
.post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(createListing));

// .post(upload.single("listing[image]"), (req, res) => {
//   res.send(req.file);
// });

  
// Create Route
router.get("/add/new", isLoggedIn, renderNewForm); 


router.route("/:id")
// Show Route
.get(wrapAsync(showListing))
//Edit/Update Route
.put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(updateListing))
// Delete Route
.delete(isLoggedIn, isOwner, wrapAsync(destroyListing));


//Edit/Update Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(renderEditForm));

  

module.exports = router;