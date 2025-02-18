const bcrypt = require('bcryptjs');  //hasing PW and hashed value can't be revert


//importing Model file based on mongoose ODM
const Admin = require('../../models/_Admin');  


//--------------importing Model file based on MongoDB Driver based query-----------------//
// const Admin = require('../../models/AdminLogin');  //returns constructor if model based on Class




exports.getLogInForm = (req,res,next)=>{

    //console.log(req.baseUrl);
    //console.log(`${req.protocol}://${req.hostname}:${process.env.PORT || 3000}`);
    //req.flash('ssg','Welcome to Admin Login');
    if(req.session.isLoggedIn){
        return res.redirect('/admin/dashboard');
    }
    res.render('backend/login',{
        title:"Ecommerce | Admin-Login",
        path:"admin/login"
    });  
    
}

//----------------------------Admin Registration based on Mongoose ODM------------------------//

exports.postAdminRegister = (req,res,next)=>{

    const name = 'Subhadip Bhattacharjee';
    const phone = '89617205241';
    const email = req.body.email;
    const password = req.body.password;
    //const v_code = 165561;

    //Chaining of a Promise(then() & catch()) block in a sequence
    Admin.findOne({'email':email})                           //returns a promise
         .then(user=>{
            if(user){
                console.log('Email already registered in our record');
                return res.redirect('/admin');
            }
            bcrypt.hash(password,12)                        //returns a promise
                  .then(hashedPassword=>{
                        const admin = new Admin({
                              name: name,
                              phone: phone,
                              email: email,
                              password: hashedPassword
                             //v_code:v_code
                        });
                        return admin.save();                //returns a promise
                   })
                  .then(result=>{
                        if(result){
                          console.log('Admin created successfully');   
                          return res.redirect('/admin');  
                        }
                        
                   });
          }) 
         .catch(err=>{
              console.log(err);
          });
}


//=========================Admin Registration using MongoDB Driver based query======================//

// exports.postAdminRegister = (req,res,next)=>{

//     const name = 'Ayan Bhattacharjee';
//     const phone = '9163144064';
//     const email = req.body.email;
//     const password = req.body.password;

//     //Chaining of a Promise(then() & catch()) block in a sequence
//     Admin.findAdmin(email)                           //returns a promise
//          .then(user=>{
//             if(user){
//                 console.log('Email already registered in our record');
//                 return res.redirect('/admin');
//             }
//             bcrypt.hash(password,12)                 //returns a promise
//                   .then(hashedPassword=>{
//                        const admin = new Admin(name,phone,email,hashedPassword);
//                        return admin.save();          //returns a promise
//                    })
//                   .then(result=>{
//                         if(result){
//                           console.log('Admin created successfully');     
//                         }
//                         return res.redirect('/admin');
//                    });
//           }) 
//          .catch(err=>{
//               console.log(err);
//           });
// }


//--------------------------------Admin Login based on Mongoose ODM--------------------------------//

exports.postAdminLogIn = (req,res,next)=>{

    const email = req.body.email;
    const pass = req.body.password;
                                                            //Mongoose queries are not promises.They have a . then() function 
                                                             // for co and async/await as a convenience.
    Admin.findOne({'email': email})                          
         .then(user=>{
  
             if(!user){
                 console.log('Invalid Email...');
                 return res.redirect('/admin');
             }
             bcrypt.compare(pass,user.password)              //returns a promise
                   .then(match=>{

                        if(match){
                           req.session.isLoggedIn = true;
                           req.session.mail = email;
                           req.session.user_id =user._id;

                           req.flash('msg','Welcome to Admin Panel');  
                           return res.redirect('/admin/dashboard');
                           //console.log(req.baseUrl);
                        } 
                        
                           console.log('Invalid Password...');
                           res.redirect('/admin');
                    })
                   .catch(err=>{
                        console.log(err);
                        return res.redirect('/admin');
                    });
                  
          })
         .catch(err=>{
              console.log(err);
              return res.redirect('/admin');
          });
}


//=========================Admin Login based on MongoDB Driver based query==============================//

// exports.postAdminLogIn = (req,res,next)=>{

//     const email = req.body.email;
//     const pass = req.body.password;

//     Admin.findAdmin(email)                          //returns a promise
//          .then(user=>{
  
//              if(!user){
//                  console.log('Invalid Email...');
//                  return res.redirect('/admin');
//              }
//              bcrypt.compare(pass,user.password)     //returns a promise
//                    .then(match=>{

//                         if(match){
//                            req.session.isLoggedIn = true;
//                            req.session.mail = email;
//                            req.session.user_id =user._id;

//                            console.log('Admin sucessfully LoggedIn');
//                            return res.redirect('/admin/dashboard');
//                         } 
//                            console.log('Invalid Password...');
//                            res.redirect('/admin');
//                     })
//                    .catch(err=>{
//                          console.log(err);
//                          return res.redirect('/admin');
//                     });
                  
//           })
//          .catch(err=>{
//               console.log(err);
//               return res.redirect('/admin');
//           });
// }





exports.adminLogOut=(req,res,next)=>{

    //-----------------LogOut using Creating and Consuming Promise---------------------//

    const promise = new Promise((resolve,reject)=>{      //Producing Promise  

        let logout = req.session.destroy();

          if(logout){
            return resolve("Admin successfully Logged Out");
          }else{
            return reject(err);
          }
    });

    promise.then(success=>{                             //Consuming Promise                    
                if(success){       
                   res.clearCookie('connect.sid');                  
                   //console.log(success);
                   return res.redirect('/admin'); 
                }
                return res.redirect('/admin/dashboard');
             })
            .catch(err=>{
                console.log(err);
                return res.redirect('/admin/dashboard');
             });
      
    //--------------------------LogOut using async/await function---------------------//  

    // async function logOut(){
    //     let logOutresult = await req.session.destroy();
    //     return logOutresult;                            //return promise
    // }

    // logOut().then(success=>{
    //              console.log("Admin successfully Logged Out");
    //              res.redirect('/admin');  
    //          })
    //         .catch(err=>{
    //              console.log("Unable to Logout");
    //              return res.redirect('/admin/dashboard');
    //          });


    //-----------------LogOut using conventional Call-Back function-------------------//

        // req.session.destroy(err=>{
        //     if(err){
        //        console.log("Unable to Logout");
        //        return res.redirect('/admin/dashboard');
        //     }
        //     console.log("Admin successfully Logged Out");
        //     res.redirect('/admin');  
        // });          
} 


exports.getChangePassWord=(req,res,next)=>{

    res.render('backend/forgot-pass',{
        title:"Admin|Change Password"
    });
}


exports.postChangePasseord =(req,res,next)=>{


}