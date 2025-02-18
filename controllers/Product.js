
exports.getProduct= (req,res,next)=>{
    
    res.render('frontend/product',{
        title:'Our Products',
        path:'/product'
    });
},

exports.getProductDetails= (req,res,next)=>{

    res.render('frontend/product-details',{
        path:'product-Details',
        title:'Product Details'
    });

} 