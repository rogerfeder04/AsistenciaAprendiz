import Assignment from '../models/assignment.js'

const httpAssignmets = {
//Listar todas las Asignaciones
listAllAssignments: async(req, res) => {
    try {
        const assignments = await Assignment.find();
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},

//Listar asignacion por su ID
listAssignmentsByID: async (req, res) => {
    const { id } = req.params;
    try {
        const assignments = await Assignment.findById(id);
        if (!assignments) {
            return res.status(404).json({ message: 'Asignacion no encontrada' });
        }
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},

//Listar por ID de registros
listAssignmentsByRegister: async (req, res) => {
    const { idRegister } = req.params;
    try {
        const assignments = await Assignment.findById({ register: idRegister });
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},

// Listar por ID del instructor de seguimiento
listAssignmentsByFollowupInstructor: async (req, res) => {
    const { idInstructor } = req.params;
    try {
        const assignments = await Assignment.find({ followupInstructor: idInstructor });
        if (assignments.length === 0) {
            return res.status(404).json({ message: 'No se encontraron asignaciones para el instructor de seguimiento proporcionado' });
        }
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},

// Listar por ID del instructor técnico
listAssignmentsByTechnicalInstructor: async (req, res) => {
    const { idInstructor } = req.params;
    try {
        const assignments = await Assignment.find({ technicalInstructor: idInstructor });
        if (assignments.length === 0) {
            return res.status(404).json({ message: 'No se encontraron asignaciones para el instructor técnico proporcionado' });
        }
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},

// Listar por ID del instructor de proyecto
listAssignmentsByProjectInstructor: async (req, res) => {
    const { idInstructor } = req.params;
    try {
        const assignments = await Assignment.find({ projectInstructor: idInstructor });
        if (assignments.length === 0) {
            return res.status(404).json({ message: 'No se encontraron asignaciones para el instructor de proyecto proporcionado' });
        }
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},

// Insertar Asignación
addAssignment: async (req, res) => {
    const newAssignment = new Assignment(req.body);
    try {
        const savedAssignment = await newAssignment.save();
        res.status(201).json(savedAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
},

// Actualizar los datos de una asignación
updateAssignmentByID: async (req, res) => {
    const { id } = req.params;
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAssignment) {
            return res.status(404).json({ message: 'Asignación no encontrada' });
        }
        res.json(updatedAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
},

// Activar una asignación
enableAssignmentByID: async (req, res) => {
    const { id } = req.params;
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(id, { active: true }, { new: true });
        if (!updatedAssignment) {
            return res.status(404).json({ message: 'Asignación no encontrada' });
        }
        res.json(updatedAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
},

// Desactivar una asignación
disableAssignmentByID: async (req, res) => {
    const { id } = req.params;
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(id, { active: false }, { new: true });
        if (!updatedAssignment) {
            return res.status(404).json({ message: 'Asignación no encontrada' });
        }
        res.json(updatedAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
};

export default httpAssignmets