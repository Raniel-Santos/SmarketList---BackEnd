import mongoose from "mongoose";
const { Schema } = mongoose;

const produtos = new Schema({
    nome:{
        type: String,
        required: true
    },
    quantidade:{
        type: Number,
        default: 1
    },
    categoria:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }
});

const Produto = mongoose.model('Produto', produtos)

export default Produto;
