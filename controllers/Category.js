
exports.getCategory=(req,res,next)=>{
    
    res.render('frontend/category',{
        title:"Our Category",
        path:'/category'
    });
}