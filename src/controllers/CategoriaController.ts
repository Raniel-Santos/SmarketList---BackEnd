import { Request, Response } from "express";
import Categoria from "../models/Categoria";
import Produto from "../models/Produto";


class CategoriaController{
    public async cadastrarCategoria(req:Request, res:Response){
        try{
            const categoria = await Categoria.create(req.body);
            res.status(201).json(categoria);
        }catch(error){
            res.status(500).json({message:error});
        }
    }


    public async buscarCategoria(req: Request, res: Response){
        try{
            const categorias = await Categoria.find().populate("produtos").exec();
            if(categorias){
                                
                res.status(200).json(categorias);
            }else{
                res.status(404).json({message: `categoria ${req.params.id} não encontrada...`});
            }
        }catch(error){
            console.log(error);
            
            res.status(500).json({message:error});
        }
    }

    public async buscarCategoriaPorId(req: Request, res: Response){
        try{
            const categoria = await Categoria.findById(req.params.id, '-__v)');
            if(categoria){
                res.status(200).json(categoria);
            }else{
                res.status(404).json({message: `categoria ${req.params.id} não encontrada...`});
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }

    public async editarCategoria(req:Request, res: Response){
        try{
            const categoria = await Categoria.findById(req.params.id, '-__v');
            if(!categoria){
                res.status(404).json({message: `categoria ${req.params.id} não encontrada...`})
            }else{
                const{ nome } = req.body;
                if(nome){
                    categoria.nome = nome;
                }
                await categoria.save();
                res.status(200).json(categoria)
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }

    public async excluirCategoria(req: Request, res: Response){
        try{
            const categoria = await Categoria.findByIdAndDelete(req.params.id);
            if(!categoria){
                res.status(404).json({message: `categoria ${req.params.id} não encontrado...`})
            }else{
                res.status(404).json({message: `categoria ${req.params.id} exculída com sucesso!`})
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }
}


export default new CategoriaController();