//importing database
const getdb = require('../server/database').getDB;

exports.getCart = (req,res,next)=>{

    res.render('frontend/cart',{
        path : '/cart',
        title:'Your Cart',
        //data:data
    });

    //const db = getdb();

    //find() returns cursor which go through our all documents in a collection
    //return type find() is a cursor whereas return type of Cursor.toArray() is a promise

    // db.collection('user').find().toArray()
    // .then(data=>{
           
    //     // req.session.cid="go";
    //     // console.log(req.session);
        
        
    //     res.render('frontend/cart',{
    //         path : '/cart',
    //         title:'Your Cart',
    //         data:data
    //     });
    // })
    // .catch(err=>{
    //     console.log(err);
    // });

    
   
}