
exports.getHome = (req,res,next)=>{
    
    res.render('frontend/index',{
        title:'Home',
        path:'/home'
    });
}