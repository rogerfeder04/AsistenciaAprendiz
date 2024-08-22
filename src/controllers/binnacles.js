import Binnacle from '../models/binnacles.js';
import Assignment from '../models/assignment.js';

const httpBinnacle = {

        // GET: Listar todas las bitacoras
    listBinnacles: async (req, res) => {
        try {
            const binnacles = await Binnacle.find();
            res.json({ binnacles });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

     // GET: Obtener bitacora por su ID
    listById: async (req, res) => {
        try {
            const binnacle = await Binnacle.findById(req.params.id);
            if (binnacle) {
                res.json(binnacle);
            } else {
                res.status(404).json({ message: 'Bitacora no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

     // GET: Listar bitacora por id de asignacion
    listarByAssignment: async (req, res) => {
        try {
            const binnacleAssignment = await Binnacle.find({ assignament: req.params.id });
            res.json(binnacleAssignment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
     // GET: Listar bitacora por id de instructor
    listarByInstructor: async (req, res) => {
            try {
                const binnacleInstructor = await Binnacle.find({ instructor: req.params.id });
                res.json(binnacleInstructor);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        },

    // POST: Añadir aprendiz
    addBinnacle: async (req, res) => {
        const {assignament, instructor, number, document, status, observations, users } = req.body;
         try {
        const binnacle = new Binnacle({assignament, instructor, number, document, status, observations, users});
        await aprendiz.save();
        res.json({ aprendiz });
         } catch (error) {
        res.status(400).json({ error: error.message });
         }
        },

    // PUT: Modificar aprendiz
    updateBinnacle: async (req, res) => {
        const { id } = req.params;
    const { assignament, instructor, number, document, status, observations, users } = req.body;
    try {
        const binnacle = await Binnacle.findByIdAndUpdate(id, { assignament, instructor, number, document, status, observations, users }, { new: true });
        res.json({ binnacle });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

    // PUT: Activar Aprendiz
    enableBinnacle: async (req, res) => {
        const { id } = req.params;
        try {
            await Binnacle.findByIdAndUpdate(id, { estado: 1 });
            res.json({ msg: "Bitacora activada correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

     // PUT: Activar Aprendiz
     disableBinnacle: async (req, res) => {
        const { id } = req.params;
        try {
            await Binnacle.findByIdAndUpdate(id, { estado: 0 });
            res.json({ msg: "Bitacora desactivada correctamente" });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        },


        
        
            }

export default httpBinnacle;