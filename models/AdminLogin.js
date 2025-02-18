const getdb = require('../server/database').getDB;

class Admin{

    constructor(name,phone,email,password){
        this.name= name;
        this.phone= phone;
        this.email= email;
        this.password= password;
    }

    save(){

        const DB = getdb();

        return DB.collection('admin')
                 .insertOne(this)       //returns a promise
                 .then(result=>{
                     //console.log(result);
                     return result ;
                  })
                 .catch(err=>{

                     console.log(err);
                  });
    }

    static findAdmin(mail){

        const DB = getdb();

        return DB.collection('admin')
                 .findOne({"email":mail})     //returns a promise
                 .then(user=>{
                    //console.log(user);
                    return user ;
                  })
                 .catch(err=>{
                     console.log(err);
                  });
    }
    
    static checkLogin(mail,pass){

        const DB = getdb();

        return DB.collection('admin')
                 .findOne({$and:[{"email":mail},{"password":pass}]})    //returns a promise
                 .then(user=>{
                    //console.log(user);
                    return user ;
                 })
                 .catch(err=>{
                     console.log(err);
                 });
    }

      
}

module.exports = Admin;