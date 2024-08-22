const mongoose = require('mongoose');

const followupSchema = new mongoose.Schema({
    assigment: { type: mongoose.Schema.Types.ObjectId, ref: 'assigment', require: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'instructor', require: true },
    number: { type: String, require: true },
    month: { type: Date, require: true },
    document: { type: String, require: true },
    status: { type: String, require: true, default: 1 },
    users: { type: String, require: true },
    observations: { type: String, require: true },
    createdAt: { type: Date, require: true },
    updatedAt: { type: Date, require: true }
}, { timestamps: true })


export default mongoose.model("Followup", followupSchema)