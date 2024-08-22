import mongoose from "mongoose";

const modalitySchema = new mongoose.Schema({
    name: { type: string, required: true },
    hourInstructorFollow: { type: string, required: true },
    hourInstructorTechnical: { type: string, required: true },
    hourInstructorProject: { type: string, required: true }
    
}, { timestamps: true });



export default mongoose.model("Modality", modalitySchema);