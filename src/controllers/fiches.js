import Fiche from "../models/fiches.js";

const httpFiches = {
  // Crear una nueva ficha
  addFiche: async (req, res) => {
    const { number, program, owner, coordination, startDate, endEnd } = req.body;
    try {
      const newFicha = new Fiche({
        number, program, owner, coordination, dateStart, dateEnd
      }); 
      const addNewFiche = await newFicha.save();
      console.log("Ficha creada:", addNewFiche);
      res.json(addNewFiche);
    } catch (error) {
      console.error("Error al crear ficha:", error);
      res.status(500).json({ error: "Error al crear ficha" });
    }
  },

  // Editar una ficha por su ID
  updateFiche: async (req, res) => {
    const { id } = req.params;
    const { number, program, owner, coordination, dateStart, dateEnd } = req.body;
    try {
      const updateFiche = await Fiche.findByIdAndUpdate(
        id,
        { number, program, owner, coordination, dateStart, dateEnd },
        { new: true }
      );

      if (!updateFiche) {
        throw new Error("Ficha no encontrada");
      }

      console.log("Ficha editada:", updateFiche);
      res.json(updateFiche);
    } catch (error) {
      console.error("Error al editar ficha:", error);
      res.status(500).json({ error: "Error al editar ficha" });
    }
  },

  // Listar todas las fichas
  listAllFiches: async (req, res) => {
    try {
      const fiches = await Fiche.find();
      console.log("Lista de fichas:", fiches);
      res.json(fiches);
    } catch (error) {
      console.error("Error al listar fichas:", error);
      res.status(500).json({ error: "Error al listar fichas" });
    }
  },

  // Listar una ficha por su ID
  listFicheById: async (req, res) => {
    const { id } = req.params;
    try {
      const ficheId = await Fiche.findById(id);

      if (!ficheId) {
        return res.status(404).json({ error: "Ficha no encontrada" });
      }

      console.log("Ficha encontrada:", ficheId);
      res.json(ficheId);
    } catch (error) {
      console.error("Error al listar ficha por ID:", error);
      res.status(500).json({ error: "Error al listar ficha por ID" });
    }
  },

  // Activar o desactivar una ficha por su ID
  enableDisableFiche: async (req, res) => {
    const { id } = req.params;
    try {
      const fiche = await Fiche.findById(id);
      if (!fiche) {
        return res.status(404).json({ error: "Ficha no encontrada" });
      }

      fiche.estado = fiche.estado === 1 ? 0 : 1; // Cambiar estado (1 -> 0, 0 -> 1)
      await fiche.save();

      const msg =
        fiche.status === 1
          ? "Ficha activada correctamente"
          : "Ficha desactivada correctamente";
      res.json({ msg: msg });
    } catch (error) {
      console.error("Error al activar/desactivar ficha:", error);
      res.status(500).json({ error: "Error al activar/desactivar ficha" });
    }
  },
};

export default httpFiches;