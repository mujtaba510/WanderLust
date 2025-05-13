// Schema Validation tool (joi.dev/api/)
// npm i joi
const Joi = require('joi');

const listingSchema = Joi.object({

    listing : Joi.object({

       title : Joi.string().required(),
       category : Joi.string().required(),
       description : Joi.string().required(),
       image : Joi.string().allow("",null),
       price: Joi.number().required().min(1),
       location : Joi.string().required(),
       country : Joi.string().required(),

    }).required()

});


// Review Validation Schema
const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});

// Exporting both schemas
module.exports = {
    listingSchema,
    reviewSchema,
};


