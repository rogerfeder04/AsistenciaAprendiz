import  User from '../models/userEP.js';

const userHelper = {
    existUserID: async (id) => {
        try {
            const exist = await User.findById(id);
            if (!exist) {
                throw new Error(`El usuario con ID ${id} no existe`);
            }
            return exist;
        } catch (error) {
            throw new Error(`Error al buscar usuario por ID: ${error.message}`);
        }
    },

    existEmail: async (email, method = "POST") => {
        try {
            const exist = await User.findOne({ email });
            if (exist) {
                throw new Error(`Ya existe ese email en la base de datos: ${email}`);
            }
        } catch (error) {
            throw new Error(`Error al verificar email: ${error.message}`);
        }
    },

    verifyEmail: async (email) => {
        try {
            const existe = await User.findOne({ email });
            if (!exist) {
                throw new Error(`El email ${email} no está registrado`);
            }
            return exist;
        } catch (error) {
            throw new Error(`Error al verificar email: ${error.message}`);
        }
    },
};

export default userHelper;