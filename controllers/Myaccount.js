
exports.getLoginShow = (req,res,next)=>{
    
    res.render('frontend/my-account',{
        title:'My Account',
        path:'/my-account'
    });
}