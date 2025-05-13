// requiring MongoDB 
const mongoose = require('mongoose');
const Review = require("./review.js")

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    category: String,
    description: String,

    image: {
        url: String,
        filename: String
    },

    
    price: Number,
    country: String,
    location: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId, // Use mongoose.Schema here
            ref: "Review"
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});


listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing.reviews.length)
    {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;