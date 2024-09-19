import mongoose from "mongoose";

const modalitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    hourInstructorFollow: { type: String, required: true },
    hourInstructorTechnical: { type: String, required: true },
    hourInstructorProject: { type: String, required: true }
    
}, { timestamps: true });



export default mongoose.model("Modality", modalitySchema);