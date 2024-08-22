import mongoose from "mongoose";

const fichesShema = new mongoose.Schema({
    number: { type: Number, required: true},
    program: { type: String, required: true },
    owner: { type: String, required: true },
    coordination: { type: String, required: true },
    fstart: { type: Date, required: true },
    fdate: { type: Date, required: true },
    status: { type: Number, required: true, default: 1 },
}, { timestamps: true })

export default mongoose.model("Fiche", fichesShema)