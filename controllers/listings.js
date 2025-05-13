const Listing = require("../models/listing.js");

// Index Route Logic
module.exports.index = async (req,res)=>{
    let listings = await Listing.find({});
    res.render("listings/index.ejs",{listings});
  };


  // Show Route Logic
module.exports.showListing = async (req,res)=>{
  let {id} = req.params;

  let listing = await Listing.findById(id).populate({ path: "reviews" , populate: {path: "author"}}).populate("owner");

  if(!listing)
  {
    req.flash("error", "Listing you requested for does not exist");
    res.redirect("/listings");
  }

  else
  {
    res.render("listings/show.ejs",{listing});
  }
  
};


// Create Route Logic
module.exports.renderNewForm = (req, res)=>{

  res.render("listings/new.ejs");
  
};

module.exports.createListing = async (req,res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  // console.log("url: ",url,"  filename: ",filename);
  let newListing = new Listing(req.body.listing);
  newListing.image.url = url;
  newListing.image.filename = filename;
  newListing.owner = req.user._id;

  await newListing.save();
  req.flash("sucess", "New Listing Created");
  res.redirect("/listings");
};


// Edit/Update Route Logic
module.exports.renderEditForm = async (req,res)=>{
  let {id} = req.params;
  let listing = await Listing.findById(id);

  if(!listing)
    {
      req.flash("error", "Listing you requested for does not exist");
      res.redirect("/listings");
    }
  else
  {
    let originalImgUrl = listing.image.url;
    originalImgUrl = originalImgUrl.replace("/upload", "/upload/w_250")   // Image transformation from cloudinary

    res.render("listings/edit.ejs",{ listing,  originalImgUrl });
  }
  
};

module.exports.updateListing = async (req,res) => {
  let {id} = req.params;
  let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing}, { new:true, runValidators: true });

  if(typeof req.file != "undefined")
  {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image.url = url;
    listing.image.filename = filename;
    await listing.save();
  }
  

  req.flash("sucess", "Listing Updated");
  res.redirect(`/listings/${id}`);
};


// Delete Route Logic
module.exports.destroyListing = async (req,res)=>{
  let {id} = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("sucess", "Listing Deleted");
  res.redirect("/listings");
};