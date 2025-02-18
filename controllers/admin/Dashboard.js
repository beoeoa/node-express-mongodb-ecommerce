
exports.getAdminDashboard=(req,res,next)=>{

    res.render('backend/dashboard',{
            title:"Ecommerce | Admin-Dashboard",
            path:"admin/Dashboard",
            msg: req.flash('msg')
        });
}