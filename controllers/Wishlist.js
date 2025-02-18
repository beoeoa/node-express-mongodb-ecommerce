
exports.getWishlist=(req,res)=>{

    res.render('frontend/wishlist',{
        title:'Wishlist',
        path:'/wishlist'
    });
}