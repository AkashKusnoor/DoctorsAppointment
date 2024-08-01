import mongoose from 'mongoose' ;
import hospitalModel from './hospitalModel';
const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    firstName:{
        type:String,
        reuire:[true,'First name is required']
    },
    lastName:{
        type:String,
        require:[true,'Last name is required']
    },
    qualification:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        require:[true,'Phone no is required']
    },
    email:{
        type:String,
        require:[true,'Email is required']
    },
    website:{
        type:String
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    specialization:{
        type:String,
        required:[true,'Specialization is required']
    },
    experienceInYears:{
        type:Number,
        required:[true,'Experience is required']
    },
    feesPerCunsaltation:{
        type:Number,
        required:[true,'fee is required']
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospitalModel'
       }
    ],
    
    status:{
        type:String,
        enum:['Pending','appointed'],
    },
    timings:{
        type:String,
        required:[true,'Work timing is required']       
    }

},{timestamps:true}
);

export default mongoose.model('doctors',doctorSchema);