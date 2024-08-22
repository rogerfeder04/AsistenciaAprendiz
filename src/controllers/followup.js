import Followup from '../models/followup.js';

const httpFollowup = {
    //GET: Listar todos los Followups
    listallfollowup: async (req, res) => {
        try {
            const followups = await Followup.find();
            res.json(followups);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //GET: Listar Followup por ID
    listfollowupbyid: async (req, res) => {
        const { id } = req.params;
        try {
            const followup = await Followup.findById(id);
            if (!followup) {
                return res.status(404).json({ message: 'Followup no encontrado' });
            }
            res.json(followup);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //GET: Listar Followup por ID de asignación
    listfollowupbyassignment: async (req, res) => {
        const { assigment } = req.params;
        try {
            const followups = await Followup.find({ assignment: assigment });
            if (followups.length === 0) {
                return res.status(404).json({ message: 'No se encontraron followups para la asignación proporcionada' });
            }
            res.json(followups);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //GET: Listar Followup por ID del instructor
    listfollowupbyinstructor: async (req, res) => {
        const { instructor } = req.params;
        try {
            const followups = await Followup.find({ instructor: idinstructor });
            if (followups.length === 0) {
                return res.status(404).json({ message: 'No se encontraron followups para el instructor proporcionado' });
            }
            res.json(followups);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //POST: Insertar un Followup
    insertfollowup: async (req, res) => {
        const newFollowup = new Followup({
            assigment: req.body.assigment,
            instructor: req.body.instructor,
            number: req.body.number,
            month: req.body.month,
            document: req.body.document,
            status: req.body.status,
            users: req.body.users,
            observations: req.body.observations
        });
        try {
            const savedFollowup = await newFollowup.save();
            res.status(201).json(savedFollowup);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    //PUT: Actualizar un Followup por ID
    updatefollowupbyid: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedFollowup = await Followup.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedFollowup) {
                return res.status(404).json({ message: 'Followup no encontrado' });
            }
            res.json(updatedFollowup);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    //PUT: Activar un Followup
    enablefollowupbyid: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedFollowup = await Followup.findByIdAndUpdate(id, { active: true }, { new: true });
            if (!updatedFollowup) {
                return res.status(404).json({ message: 'Followup no encontrado' });
            }
            res.json(updatedFollowup);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    //PUT: Desactivar un Followup
    disablefollowupbyid: async (req, res) => {
        const { id } = req.params;
        try {
            const updatedFollowup = await Followup.findByIdAndUpdate(id, { active: false }, { new: true });
            if (!updatedFollowup) {
                return res.status(404).json({ message: 'Followup no encontrado' });
            }
            res.json(updatedFollowup);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

export default httpFollowup;
