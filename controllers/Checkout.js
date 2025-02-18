
exports.getCheckOut=(req,res)=>{

    res.render('frontend/check-out',{
        path:'/checkout',
        title:'Check-Out'
    });
}