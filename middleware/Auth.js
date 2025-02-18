const notLoggedIn =(req,res,next)=>{

    if(!req.session.isLoggedIn){
        return res.redirect('/admin');
    }else{
      next();
    }
}

const loggedIn =(req,res,next)=>{

    if(req.session.isLoggedIn){
        return res.redirect('/admin/dashboard');
    }else{
      next();
    }
}

exports.verified = loggedIn;
exports.notVerified = notLoggedIn;