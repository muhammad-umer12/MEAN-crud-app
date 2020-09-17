const mongoose = require('mongoose');


const schema = mongoose.Schema;
const studentSchema =  new schema({
    name:{
        type: String,
 
    },
    email:{
        type: String,
   
    
    },
    ID:{
        type: String,
        unique:true
    },
    gender:{
        type: String,     
    },
    dob:{
        type: String,
      
    },
    section:{
        type: String,
        
    },
    subjects:{
        type:String
    }
},
{
    timestamps: true
})




const Students = mongoose.model('Student',studentSchema)
module.exports = Students;