import mongoose from "mongoose";

const { Schema } = mongoose;

const usuario = new Schema({
    nome: String,
    email: String,
    senha: String,
    tipoUsuario:{
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    }
});
const Usuario = mongoose.model('usuarios', usuario);

export default Usuario;