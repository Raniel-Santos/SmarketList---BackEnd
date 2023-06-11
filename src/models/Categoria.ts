import mongoose from "mongoose";
import Produto, { iProduto } from "./Produto";
const { Schema } = mongoose;

export interface iCategoria extends Document{
    nome: String,
    produtos: iProduto[]
}

const categoria = new Schema({
    nome:{
        type: String,
        required: true
    },
    produtos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: Produto
    }]
})


const Categoria = mongoose.model<iCategoria>('Categoria', categoria)

export default Categoria;