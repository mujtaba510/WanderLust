
if(process.env.NODE_ENV != "production")
{
  // npm i dotenv
  require('dotenv').config()
}
// console.log(process.env);

// requiring express (npm i express)
const express = require("express");
const app = express();

// requiring MongoDB (npm i mongoose)
const mongoose = require('mongoose');

const Listing = require("./models/listing.js");
const User = require("./models/user.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

//require ejs for public and view folders (npm i ejs)
const path = require("path");

// requiring patch request (npm i method-override)
const methodOverride = require('method-override');

// requiring for .ejs
const ejsMate = require("ejs-mate");

// requiring session id package (npm i express-session)
const session = require("express-session");

// For production Enviroment and to store seesions in mongo atlas
const MongoStore = require('connect-mongo');

//requiring connect flash for flashing msgs once (npm i connect-flash)
const flash = require("connect-flash");

//requiring passport (npm i passport)
const passport = require("passport");

// npm i passport-local
const Localstrategy = require("passport-local");



const port = 3000;
const dbUrl = process.env.ATLAS_DB_URL;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.engine('ejs', ejsMate);


// Usage of express sessions and mongo connect
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60,
});

sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expire: Date.now() * 1000 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    http: true
  }
}

app.use(session(sessionOptions))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


main()
.then(()=>{
    console.log("Connection Sucessfull");
})
.catch( (err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(dbUrl);
}


// Flash Msgs Middleware
app.use((req,res,next) => {
  res.locals.sucessMsg = req.flash("sucess");
  res.locals.errorMsg = req.flash("error");
  res.locals.currUser = req.user;
  next();
});


// Root Route
// Counting Listings
app.get("/", wrapAsync(async (req,res)=>{
  let totalListings = await Listing.countDocuments({});
  res.send(`<h2>Total Listings: ${totalListings}</h2>`);
}));


//listings routes
app.use("/listings", listingRouter);

//review routes
app.use("/listings/:id/reviews", reviewRouter);

//user routes
app.use("/", userRouter);




// Invalid Route Handler
app.all("*", (req,res,next) => {
  throw new ExpressError(400,"Page Not Found!");
  // OR next(new ExpressError(400,"Page Not Found!"));
});


// Error Handler
app.use((err,req,res,next) => {
  let {statusCode=400, message="Some Error"} = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).render("error.ejs", {message});
});

// App is listening
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});








