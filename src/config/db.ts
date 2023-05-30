import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const URI = process.env.URI || '';

const iniciaBd = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Conectado ao Banco de Dados MongoDB !!!");
    }catch(error){
        console.log(error);        
    }
};
export default iniciaBd;