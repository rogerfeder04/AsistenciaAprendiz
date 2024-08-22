// Importa módulos y dependencias
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

// Importa rutas
import Apprentice from './../routes/apprentices.js'
import Assignment from './../routes/assignment.js'
import Binnacle from './../routes/binnacle.js'
// import Fiche from './../routes/fiche.js'
import Followup from './../routes/followup.js'
// import Instructor from './../routes/instructor.js'
// import Log from './../routes/logs.js'
import Modality from './../routes/modality.js'
import Register from './../routes/register.js'
import User from './../routes/users.js'



class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Inicializar middlewares
        this.middlewares();

        // Inicializar rutas
        this.routes();
    }

    middlewares() {
        // Habilitar CORS
        this.app.use(cors());

        // Parsear cuerpos de solicitudes JSON
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/Apprentice', Apprentice);
        this.app.use('/api/Assignment', Assignment);
        this.app.use('/api/Binnacle', Binnacle);
        this.app.use('/api/Fiche', Fiche);
        this.app.use('/api/Followup', Followup);
        this.app.use('/api/Instructor', Instructor);
        this.app.use('/api/Log', Log);
        this.app.use('/api/Modality', Modality);
        this.app.use('/api/Register', Register);
        this.app.use('/api/User', User)

    
    
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
            mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ProyectoFinal')
            .then(() => console.log('Connected to MongoDB!'))
            .catch(err => console.error('Failed to connect to MongoDB', err));
        });
    }
}

// Crear una instancia de la clase Server y empezar a escuchar
export {Server};
