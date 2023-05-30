import mongoose from "mongoose";
const { Schema } = mongoose;

const categoria = new Schema({
    nome:{
        type: String,
        required: true
    }
})

const Categoria = mongoose.model('Categoria', categoria)

export default Categoria;