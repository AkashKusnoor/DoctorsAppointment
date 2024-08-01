import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        unique:true,
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female",]
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    phone:{
        type:String,
        required:[true,'Phone no is rquired']
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isDoctor:{
        type:Boolean,
        default:false
    },
    notification:{
        type:Array,
        default:[]
    },
    seennotification:{
        type:Array,
        default: []
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }

},
    {timestamps:true}
)

export default mongoose.model('Users',userSchema);