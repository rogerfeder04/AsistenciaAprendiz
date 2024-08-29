import Fiche from "../models/fiches.js";

const fichesHelper = {
    existFicheID: async (id) => {
        try {
            const exist = await Fiche.findById(id);
            if (!exist) {
                throw new Error(`La ficha con ID ${id} no existe`);
            }
            return exist;
        } catch (error) {
            throw new Error(`Error al buscar la ficha por ID: ${error.message}`);
        }
    },

    existProgram: async (codigo, method = "POST") => {
        try {
            const exist = await Fiche.findOne({ program });
            if (exist) {
                throw new Error(`Ya existe ese codigo en la base de datos: ${program}`);
            }
        } catch (error) {
            throw new Error(`Error al verificar codigo: ${error.message}`);
        }
    },

    verificarCodigo: async (program) => {
        try {
            const exist = await Fichas.findOne({ program });
            if (!exist) {
                throw new Error(`El codigo ${program} no está registrado`);
            }
            return exist;
        } catch (error) {
            throw new Error(`Error al verificar codigo: ${error.message}`);
        }
    },
};

export default fichesHelper;