import { Request, Response } from "express";
import Lista from "../models/Lista";

class ListaController{
    public async cadastrarLista(req:Request, res:Response){
        try{
            const lista = await Lista.create(req.body)
            res.status(201).json(lista);
        }catch(error){
            res.status(500).json({message: error})
        }
    }

    public async buscarLista(req:Request, res:Response){
        try{
            const lista = await Lista.findById(req.params.id, '-__v');
            if(lista){
                res.status(201).json();
            }else{
                res.status(404).json({message: `lista ${req.params.id} naão encontrada!`})
            }
        }catch(error){
            res.status(500).json({message: error})
        }
    }

    public async atualizarLista(req:Request, res: Response){
        try{
            const lista = await Lista.findById(req.params.id, '-__v');
            if(!lista){
                res.status(404).json({message: `lista ${req.params.id} naão encontrada!`})
            }else{
                const {nome} = req.body;
                if(nome){
                    lista.nome = nome;
                }
                await lista.save();
                res.status(200).json(lista)
            }
            res.status(201).json();
        }catch(error){
            res.status(500).json({message: error})
        }
    }

    public async excluirLista(req: Request, res: Response){
        try{
            const lista = await Lista.findByIdAndDelete(req.params.id);
            if(!lista){
                res.status(404).json({message: `lista ${req.params.id} não encontrado....`});
            }else{
                res.status(404).json({message: `lista ${req.params.id} excluído com sucesso!`});
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }
}

export default new ListaController();