import { Request, Response } from "express";
import Produto from "../models/Produto";



class ProdutoController{
    public async cadastrarProduto(req:Request, res:Response){
        try{
            const produto = await Produto.create(req.body);
            res.status(201).json(produto);
        }catch(error){
            res.status(500).json({message:error});
        }
    }

    public async buscarProduto(req: Request, res: Response){
        try{
            const produto = await Produto.findById(req.params.id, '-__v');
            if(produto){
                res.status(200).json(produto);
            }else{
                res.status(404).json({message: `produto ${req.params.id} não encontrado....`});
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }

    public async atualizarProduto(req: Request, res: Response){
        try{
            const produto = await Produto.findById(req.params.id, '-__v');
            if(!produto){
                res.status(404).json({message: `produto ${req.params.id} não encontrado....`});
            }else{
                const { nome, quantidade } = req.body;
                if(nome){
                    produto.nome = nome;
                }
                if(quantidade){
                    produto.quantidade = quantidade;
                }
                await produto.save();

                res.status(200).json(produto);
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }

    public async excluirProduto(req: Request, res: Response){
        try{
            const produto = await Produto.findByIdAndDelete(req.params.id);
            if(!produto){
                res.status(404).json({message: `produto ${req.params.id} não encontrado....`});
            }else{
                res.status(404).json({message: `produto ${req.params.id} excluído com sucesso!`});
            }
        }catch(error){
            res.status(500).json({message:error});
        }
    }
}


export default new ProdutoController();