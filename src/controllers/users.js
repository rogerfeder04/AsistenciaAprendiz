import  User from '../models/users.js';
import bcryptjs from 'bcryptjs';
import { generarJWT } from '../middleware/validarJWT.js';

const httpUsuarios = {
    listAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json({ users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    listUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (user)
                res.json({ user });
            else
                res.status(404).json({ msg: "Usuario no encontrado" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    listEnableUsers: async (req, res) => {
        try {
            const enableUsers = await User.find({ status: 1 });
            res.json({ enableUsers });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    listUsersDisables: async (req, res) => {
        try {
            const disablesUsers = await User.find({ status: 0 });
            res.json({ disablesUsers });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    addUsers: async (req, res) => {

        const { name, email, role, password } = req.body;
        const user = new User({ name, email, role, password });

        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt)

        await user.save()

        res.json({
            user
        })
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await Usuario.findOne({ email })
            if (!user) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos"
                })
            }

            if (user.status === 0) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos"
                })
            }

            const validPassword = bcryptjs.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(401).json({
                    msg: "Usuario / Password no son correctos"
                })
            }

            const token = await generarJWT(user._id);

            res.json({
                usuario: user,
                token
            })

        } catch (error) {

            return res.status(500).json({


                msg: "Hable con el WebMaster"
            })
        }
    },

    updatePassword: async (req, res) => {
        const { id } = req.params;
        const { newPassword } = req.body;
        try {
            const salt = bcryptjs.genSaltSync();
            const hashedPassword = bcryptjs.hashSync(newPassword, salt);

            const user = await User.findById(id);
            if (user) {
                user.password = hashedPassword; // Guardar la contraseña encriptada
                await user.save();
                res.json({ msg: "Contraseña actualizada correctamente" });
            } else {
                res.status(404).json({ msg: "Usuario no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        const { email } = req.body;
        try {
            const user = await User.findById(id);
            if (user) {
                user.email = email;
                await usuario.save();
                res.json({ msg: "Usuario modificado correctamente" });
            } else {
                res.status(404).json({ msg: "Usuario no encontrado" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    enableUser: async (req, res) => {
        const { id } = req.params;
        try {
            await User.findByIdAndUpdate(id, { status: 1 });
            res.json({ msg: "Usuario activado correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    disableUser: async (req, res) => {
        const { id } = req.params;
        try {
            await User.findByIdAndUpdate(id, { status: 0 });
            res.json({ msg: "Usuario desactivado correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default httpUsuarios