
exports.getContact= (req,res,next)=>{
    
    res.render('frontend/contact',{
        title:'Contact-Us',
        path:'/contact'
    });
}