import mongoose from "mongoose";
import Lista from "./Lista";

const { Schema } = mongoose;

const usuario = new Schema({
    nome: String,
    email: String,
    senha: String,
    tipoUsuario:{
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    },
    listas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: Lista
        }
    ]
});
const Usuario = mongoose.model('usuarios', usuario);

export default Usuario;