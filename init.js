
// if(process.env.NODE_ENV != "production")
//   {
//     // npm i dotenv
//     require('dotenv').config()
//   }

// // requiring MongoDB
// const mongoose = require('mongoose');
// const dbUrl = process.env.ATLAS_DB_URL;

// main()
// .then(()=>{
//     console.log("Connection Sucessfull");
// })
// .catch( (err) => {
//     console.log(err);
// });

// async function main() {
//   await mongoose.connect((dbUrl));
// }


// let allListings = 
// [
//   {
//     title: "Modern Coastal Escape",
//     category: "House",
//     description: "Experience a serene getaway in this beautiful modern home by the coast, offering stunning ocean views and peaceful surroundings.",
//     image: { url: "https://a0.muscache.com/im/pictures/cde2916e-eb85-4020-8a5f-fba017eddec8.jpg?im_w=720" , filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 220,
//     country: "USA",
//     location: "California, USA"
//   },
//   {
//     title: "Rustic Mountain Retreat",
//     category: "Mountain",
//     description: "A cozy mountain cabin nestled in nature, perfect for those looking to relax and enjoy outdoor adventures.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-854065432551935839/original/270e6f4f-5fea-4117-a552-523370f62a74.jpeg?im_w=720" , filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},
  
//     price: 180,
//     country: "Canada",
//     location: "Banff, Alberta"
//   },
//   {
//     title: "Spacious City Loft",
//     category: "Iconic City",
//     description: "Stay in this stylish loft located in the heart of the city. Enjoy modern amenities with vibrant city life just outside your door.",
//     image: { url: "https://a0.muscache.com/im/pictures/f5ceadbd-a34f-47d1-913f-7087a2c34398.jpg?im_w=720" , filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},
    
//     price: 300,
//     country: "USA",
//     location: "New York, USA"
//   },
//   {
//     title: "Luxury Apartment in Downtown",
//     category: "House",
//     description: "A luxurious apartment in the center of downtown, equipped with high-end finishes and incredible cityscape views.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-719778597938069068/original/e5778d41-f5e8-4bf0-bfe9-26ff81f7b75a.jpeg?im_w=720" , filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 400,
//     country: "USA",
//     location: "San Francisco, USA"
//   },
//   {
//     title: "Cozy Lakeside Cabin",
//     category: "House",
//     description: "Enjoy this cozy cabin with breathtaking lakeside views. Ideal for a quiet retreat or outdoor activities.",
//     image: { url: "https://a0.muscache.com/im/pictures/14152ff7-28fa-48cc-9c90-ac787fb5bb6b.jpg?im_w=720" , filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},
    
//     price: 150,
//     country: "USA",
//     location: "Lake Tahoe, California"
//   },
//   {
//     title: "Charming Countryside Cottage",
//     category: "House",
//     description: "A charming countryside cottage that offers comfort, tranquility, and picturesque views of rolling hills.",
//     image: { url: "https://a0.muscache.com/im/pictures/35a84b36-d385-477b-a4ca-0d894e52b3e0.jpg?im_w=720" , filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},
    
//     price: 110,
//     country: "UK",
//     location: "Cotswolds, England"
//   },
//   {
//     title: "Modern Studio Apartment",
//     category: "House",
//     description: "A sleek and modern studio apartment located in the heart of the city, perfect for solo travelers or couples.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-1130829386368339961/original/505abf5b-2f64-44c3-a417-eb2fbee52ae9.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 180,
//     country: "USA",
//     location: "Austin, Texas"
//   },
//   {
//     title: "Seaside Bungalow",
//     category: "Beachfront",
//     description: "Enjoy your stay at this comfortable seaside bungalow, offering a peaceful retreat with easy beach access.",
//     image: { url: "https://a0.muscache.com/im/pictures/127ee827-c649-4bc2-91a4-7d42cdb40cfa.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 170,
//     country: "Australia",
//     location: "Bondi Beach, Sydney"
//   },
//   {
//     title: "Historic Townhouse",
//     category: "House",
//     description: "A beautiful historic townhouse in a quiet neighborhood, with charming interiors and modern amenities.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-33320112/original/9c6775aa-3476-4423-a4eb-850084f0d0e5.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 250,
//     country: "France",
//     location: "Paris, France"
//   },
//   {
//     title: "Stylish Urban Apartment",
//     category: "House",
//     description: "A stylish and spacious apartment located in the heart of the city, with convenient access to shops, restaurants, and nightlife.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-1217773328320848391/original/3b57725b-c951-490f-b7ba-52db6199b548.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 220,
//     country: "USA",
//     location: "Los Angeles, California"
//   },
//   {
//     title: "Peaceful Desert Retreat",
//     category: "Beachfront",
//     description: "Escape to this peaceful desert retreat, surrounded by stunning landscapes and clear night skies for stargazing.",
//     image: { url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/72183223-67ac-495e-b77a-212522be0501.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 160,
//     country: "USA",
//     location: "Joshua Tree, California"
//   },
//   {
//     title: "Chic City Condo",
//     category: "Iconic City",
//     description: "Stay in this chic condo located in a vibrant part of the city. It offers all modern amenities and a prime location for exploration.",
//     image: { url: "https://a0.muscache.com/im/pictures/f632e52c-5bd6-46bf-a3be-87a569885d7c.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 210,
//     country: "USA",
//     location: "Chicago, Illinois"
//   },
//   {
//     title: "Luxury Penthouse",
//     category: "House",
//     description: "A stunning luxury penthouse with panoramic views, spacious interiors, and all the amenities you need for a comfortable stay.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-997426152002576278/original/99ccd193-8c7f-429e-9e79-f973897e1313.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 500,
//     country: "USA",
//     location: "Miami, Florida"
//   },
//   {
//     title: "Cozy Cabin in the Woods",
//     category: "Iconic City",
//     description: "This cozy cabin offers a tranquil escape in the woods, perfect for nature lovers and outdoor enthusiasts.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-1040941889121136816/original/1df2b71d-6442-46d2-9560-7355145df55a.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 130,
//     country: "Canada",
//     location: "Whistler, British Columbia"
//   },
//   {
//     title: "Modern City Penthouse",
//     category: "Iconic City",
//     description: "A luxurious penthouse located in the heart of the city, offering modern designs and incredible views.",
//     image: { url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1075203407966235205/original/1a767201-044c-45e5-90ae-336dbeeaa1c2.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 480,
//     country: "Singapore",
//     location: "Singapore"
//   },
//   {
//     title: "Eco-Friendly Jungle Retreat",
//     category: "Other",
//     description: "Immerse yourself in nature at this eco-friendly jungle retreat, offering sustainable living and breathtaking views.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-833751628213945018/original/f105c9f3-2594-463c-b2e4-e9d1ed6e4806.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 200,
//     country: "Costa Rica",
//     location: "Santa Teresa"
//   },
//   {
//     title: "Secluded Beachfront Villa",
//     category: "Beachfront",
//     description: "A luxurious beachfront villa with direct access to the beach and stunning ocean views. Ideal for a private getaway.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-1254905782500319478/original/cd219f1f-9f81-4791-b8b8-1253cfd0720a.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 600,
//     country: "Maldives",
//     location: "Malé"
//   },
//   {
//     title: "Classic Parisian Apartment",
//     category: "House",
//     description: "A classic Parisian apartment located near the Eiffel Tower. Enjoy the charm of Paris with easy access to iconic landmarks.",
//     image: { url: "https://a0.muscache.com/im/pictures/ee252158-ef23-46f8-81ba-b3869b335b54.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 350,
//     country: "France",
//     location: "Paris, France"
//   },
//   {
//     title: "Contemporary Beach House",
//     category: "Farm",
//     description: "A contemporary beach house with modern designs, open spaces, and beautiful ocean views. Perfect for a relaxing vacation.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-705583331237049946/original/9100977f-bd36-431c-be8c-c7ff3e0a2fb4.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 270,
//     country: "Australia",
//     location: "Byron Bay"
//   },
//   {
//     title: "Secluded River Cabin",
//     category: "House",
//     description: "Relax in this secluded cabin located by the river, surrounded by nature and perfect for fishing, kayaking, or simply unwinding.",
//     image: { url: "https://a0.muscache.com/im/pictures/2002b9b6-e4d8-48b2-af01-a058e400ef02.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 190,
//     country: "USA",
//     location: "Oregon, USA"
//   },
//   {
//     title: "Vintage Townhouse",
//     category: "House",
//     description: "This vintage townhouse offers old-world charm combined with modern comforts. It's located in a quiet neighborhood, perfect for a peaceful stay.",
//     image: { url: "https://a0.muscache.com/im/pictures/241226c8-6385-4815-8f4d-6a532dd60910.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 260,
//     country: "Spain",
//     location: "Barcelona"
//   },
//   {
//     title: "Modern Loft with Skyline View",
//     category: "Iconic City",
//     description: "A modern loft apartment with incredible skyline views, located in a trendy part of the city. Perfect for those who love nightlife and dining.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-29191158/original/b5692866-d837-446a-9924-cc188dcb616a.png?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 290,
//     country: "USA",
//     location: "Seattle, Washington"
//   },
//   {
//     title: "Quiet Countryside Getaway",
//     category: "Arctic",
//     description: "Escape the hustle and bustle of city life with this quiet countryside getaway, perfect for relaxation and nature walks.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-679668903417793896/original/ee6aa2b5-da81-4a1b-bc5f-91eb9353530e.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 180,
//     country: "New Zealand",
//     location: "Queenstown"
//   },
//   {
//     title: "Beachfront Oasis",
//     category: "Beachfront",
//     description: "This beachfront oasis offers stunning views, direct beach access, and all the amenities you need for a luxurious stay.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 500,
//     country: "Mexico",
//     location: "Tulum"
//   },
//   {
//     title: "Luxury Villa with Pool",
//     category: "House",
//     description: "A stunning luxury villa featuring a private pool, beautiful interiors, and incredible views. Ideal for a family vacation or group getaway.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-803315735424235341/original/1c40c6a2-c098-481b-8b10-e0b91a6d86df.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 700,
//     country: "Italy",
//     location: "Tuscany"
//   },
//   {
//     title: "Charming Mountain Chalet",
//     category: "Farm",
//     description: "This charming mountain chalet offers a cozy atmosphere with beautiful mountain views, ideal for skiing or hiking trips.",
//     image: { url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/miso/Hosting-964211810125934461/original/a3e26385-41c6-4f60-86f7-ed7b443b0fb2.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 250,
//     country: "Switzerland",
//     location: "Zermatt"
//   },
//   {
//     title: "Cottage by the Lake",
//     category: "House",
//     description: "A charming cottage by the lake, offering beautiful views and a peaceful environment, perfect for a relaxing holiday.",
//     image: { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1051159281004855578/original/543e31ee-8f59-463d-ba1a-7d83cf6bf77d.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 140,
//     country: "Canada",
//     location: "Muskoka, Ontario"
//   },
//   {
//     title: "Urban Loft with Rooftop Access",
//     category: "House",
//     description: "Stay in this trendy urban loft, featuring stylish interiors and access to a rooftop terrace with panoramic city views.",
//     image: { url: "https://a0.muscache.com/im/ml/photo_enhancement/pictures/prohost-api/Hosting-823234182618610192/original/e8dcd26a-9a80-4442-bd32-94970d0693fe.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 320,
//     country: "Germany",
//     location: "Berlin"
//   },
//   {
//     title: "Oceanfront Cottage",
//     category: "House",
//     description: "This cozy oceanfront cottage offers direct access to the beach and stunning views of the ocean. Perfect for a quiet retreat.",
//     image: { url: "https://a0.muscache.com/im/pictures/98f52521-63fb-476f-bbad-a94778bdfbcb.jpg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 200,
//     country: "Portugal",
//     location: "Algarve",
//   },
//   {
//     title: "Luxury Villa with Infinity Pool",
//     category: "House",
//     description: "A breathtaking luxury villa featuring an infinity pool, spacious interiors, and incredible sea views.",
//     image: { url: "https://a0.muscache.com/im/pictures/miso/Hosting-724287706736603735/original/c719d406-5d58-4767-9dc1-1688c49a1839.jpeg?im_w=720", filename: "wanderlust_DEV/gvtblyf8or2uukysa3hi"},

//     price: 900,
//     country: "Greece",
//     location: "Santorini"
//   }
// ];





// const Listing = require("./models/listing.js");
// const User = require("./models/user.js");
// const Review = require("./models/review.js");




// const initDb = async () => {
//   try {
//     const allListings = await Listing.find();
    
//     for (let listing of allListings) {
//       // Link the user ID as the owner
//       await Listing.updateOne(
//         { _id: listing._id }, 
//         { $set: { owner: "68011d5c6c0603a11acdfe57" } } // Use `$set` to update
//       );
//     }

//     console.log("All listings updated successfully.");
//   } catch (err) {
//     console.error("Error updating listings:", err);
//   }
// };


// Listing.insertMany(allListings)
// .then((res)=>{
//     console.log("Inserted");
// })
// .catch((err)=>{
//     console.log(err);
// });

// Review.deleteMany({})
// .then((res) => {
//     console.log("All listings deleted");
// })
// .catch((err) => {
//     console.log(err);
// });




// const initDb = async () => {
//   const users = await Listing.updateOne(
//     { title: "Modern Coastal Escape" }, 
//     { $set: { "image.url": "https://a0.muscache.com/im/pictures/miso/Hosting-684225816214596554/original/992cb6e6-5fe5-4703-b6fb-63a5b92a73e7.jpeg" } }
//   );
//   console.log("Updated");
// };


// const initDb = async () => {
//   const count = await Listing.countDocuments({});
// console.log(count);
// }


// initDb();





