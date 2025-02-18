
exports.getAboutUs=(req,res,next)=>{
    
    res.render('frontend/about',{
        title:"About Us",
        path:'/about'
    });
}