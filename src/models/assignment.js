import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
    register: { type: mongoose.Schema.Types.ObjectId, ref: 'Register', required: true },
    followUpInstructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    technicalInstructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    projectInstructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    certificationDoc: { type: String, required: true },
    judymentPhoto: { type: String, required: true },
    status: {type: Number, required: true}
}, { timestamps: true });

export default mongoose.model('Assignment', assignmentSchema);