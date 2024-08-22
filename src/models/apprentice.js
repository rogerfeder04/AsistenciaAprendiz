import mongoose from "mongoose";

const apprenticeShema = new mongoose.Schema({
    idFiche: { type: mongoose.Schema.Types.ObjectId, ref: 'Fiches' },
    tpDocument: { type: String, required: true },
    numDocument: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
}, { timestamps: true })

export default mongoose.model("Apprentice", apprenticeShema)