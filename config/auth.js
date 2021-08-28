const isLoggin=  (req, res, next)=> {
    if (req.isAuthenticated()) {
      res.locals.user = req.session.passport.user;
      return next();
    } else {
      res.redirect("/");
    }
  };
  
  module.exports=isLoggin;