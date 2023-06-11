import mongoose, { ObjectId } from "mongoose";
import { iCategoria } from "./Categoria";
const { Schema } = mongoose;

export interface iProduto extends Document{
    _id: ObjectId,
    nome: String,
    quantidade: Number,

    checked: Boolean
}
const produtos = new Schema({
    nome:{
        type: String,
        required: true
    },
    quantidade:{
        type: Number,
        default: 1
    },
    checked:{
        type:Boolean,
        default: false
    }
});

const Produto = mongoose.model<iProduto>('Produto', produtos)

export default Produto;
