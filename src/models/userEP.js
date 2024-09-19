import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true, unique: true },
    password: { type: String, required: true, default: "", min: 8, max: 15 },
    status: { type: Number, required: true, default: 1 }
}, { timestamps: true })

export default mongoose.model("UserEp", usersSchema)