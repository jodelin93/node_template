const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT|| 3000;
const path= require("path")
const connection= require("./models")
const flash = require('connect-flash');
const session = require("express-session");
const expressLayouts = require('express-ejs-layouts');
const MySQLStore = require("express-mysql-session")(session);
const passport = require("passport");
const app= express();
const auth = require("./config/auth");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,"public/")));


var options = {
    host: process.env.HOST_DB_DEV,
    port: process.env.PORT_DB_DEV,
    user: process.env.USERNAME_DB_DEV,
    password: process.env.PASSWORD_DB_DEV,
    database: process.env.DATABASE_DB_DEV,
  };
  var sessionStore = new MySQLStore(options);
  app.use(
    session({
      secret: process.env.SECRET_SESSION,
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(flash());
  app.use((req,res,next)=>{
    res.locals.success_msg=req.flash("success_msg");
    res.locals.error_msg=req.flash("error_msg");
    res.locals.error=req.flash("error");
    next();
})
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine","ejs");
app.use(expressLayouts);
app.set("layout","layouts/layout");

const route=  require("./routes/index")
const user=  require("./routes/user")

app.use("/",route);
app.use("/user",user);

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
        connection.sequelize.sync({
          force: true  
        })
    console.log("server connected to port "+PORT);
            })