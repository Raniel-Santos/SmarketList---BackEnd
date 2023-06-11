import mongoose from "mongoose";

const { Schema } = mongoose;

const lista = new Schema({
    nome:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['ativa', 'finalizada'],
        default: 'ativa'
    },
    produtos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    }]    
});

const Lista = mongoose.model('Lista', lista)
export default Lista;