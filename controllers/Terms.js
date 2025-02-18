
exports.getTerms= (req,res,next)=>{
    
    res.render('frontend/terms',{
        title:'Terms & Conditions',
        path:'/terms'
    });
}