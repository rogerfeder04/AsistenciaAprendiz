import mongoose from "mongoose";

const instructorsShema = new mongoose.Schema({
    name: { type: Number, required: true},
    tpdocument: { type: String, required: true },
    numdocument: { type: String, required: true },
    emailpersonal: { type: String, required: true },
    email: { type: Date, required: true },
    phone: { type: Date, required: true },
    knowledge: { type: Date, required: true },
    thematicarea: { type: Date, required: true },
    bindingtype: { type: Date, required: true },
    caphour: { type: Date, required: true },
    hourswork: { type: Date, required: true },
    status: { type: Number, required: true, default: 1 },
}, { timestamps: true })

export default mongoose.model("Instructor", instructorsShema)