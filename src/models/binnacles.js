import mongoose from 'mongoose';

const binnacleSchema= new mongoose.Schema({
    assignament:{type:mongoose.Schema.Types.ObjectId,ref:'Assignament'},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:'Instructor'},
    number:{type:String, required: true, unique:true},
    document:{type:String, required: true, unique:true},
    status: {type: Number, required: true, default: 1 },
    observations:{type:String, required: true},
    users:{type:String, required: true}
    
}, {timestamps:true});

export default mongoose.model("Binnacle", binnacleSchema);