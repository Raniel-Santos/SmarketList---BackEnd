import { Request, Response } from "express";
import Produto from "../models/Produto";
import Categoria from "../models/Categoria";



class ProdutoController{
    public async cadastrarProduto(req:Request, res:Response){
        try{
            const id_categoria = req.body.categoria;
            const categoria = await Categoria.findById(id_categoria, '-__v)');
            if(!categoria){
                res.status(404).json({message: `categoria ${req.params.id} não encontrada...`});
            }
            const dados = new Produto({
                nome: req.body.nome,
            })
            const produto = await dados.save();
            categoria.produtos.push(produto)
            await categoria.save()

            res.status(201).json(produto);
        }catch(error){
            console.log(error);            
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

    public async statusProduto(req: Request, res: Response){
        try{
            const produto = await Produto.findById(req.params.id, '-__v');
            if(!produto){
                res.status(404).json({message: `produto ${req.params.id} não encontrado....`});                
            }
            produto.checked = !produto.checked;
            await produto.save();
            res.status(200).json(produto);
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