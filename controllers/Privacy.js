
exports.getPrivacy= (req,res,next)=>{
    
    res.render('frontend/privacy-policy',{
        title:'Privacy Policy',
        path:'/privacy'
    });
}