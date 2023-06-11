import { Request, Response } from "express";
import Lista from "../models/Lista";
import Usuario from "../models/Usuario";

class ListaController{
    public async cadastrarLista(req:Request, res:Response){
        try{
            console.log(res.locals.jwtpayload);
            
            const id_usuario = res.locals.jwtpayload._id
            const usuario = await Usuario.findById(id_usuario, '-__v');
            if(!usuario){
                res.status(404).json({message: `usuario ${id_usuario} não encontrado....`});
            }
            const lista = await Lista.create(req.body)
            usuario.listas.push(lista._id);
            await usuario.save();
            console.log(usuario);            
            res.status(201).json(lista);
        }catch(error){
            console.log(error);
            res.status(500).json({message: error})
            
        }
    }

    public async adicionarProdutoLista(req:Request, res:Response){
        try{
            const id_lista = req.params.id;
            const lista = await Lista.findById(req.params.id, '-__v');
            if(lista){
                
                const produtos = req.body.produtos;                
                lista.produtos.push(...produtos);                
                await lista.save()

                res.status(201).json(lista);
            }else{
                res.status(404).json({message: `lista ${req.params.id} naão encontrada!`})
            }
        }catch(error){
            console.log(error)
            res.status(500).json({message: error})
        }
    }

    public async buscarLista(req:Request, res:Response){
        try{
            const lista = await Lista.find().populate("produtos").exec();
            if(lista){
                res.status(201).json(lista);
            }else{
                res.status(404).json({message: `lista ${req.params.id} naão encontrada!`})
            }
        }catch(error){
            res.status(500).json({message: error})
        }
    }

    public async buscarListaPorId(req:Request, res:Response){
        try{
            const lista = await Lista.findById(req.params.id, '-__v').populate('produtos').exec();
            if(lista){
                res.status(201).json(lista);
            }else{
                res.status(404).json({message: `lista ${req.params.id} naão encontrada!`})
            }
        }catch(error){
            console.log(error);
            
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

    public async finalizarLista(req: Request, res: Response){
        try{
            const lista = await Lista.findById(req.params.id, '-__v');
            if(!lista){
                res.status(404).json({message: `lista ${req.params.id} naão encontrada!`})
            }else{
                lista.status = 'finalizada'
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
            console.log(req.params.id);
            
            console.log(lista);
            if(!lista){
                
                res.status(404).json({message: `lista ${req.params.id} não encontrado....`});
            }else{
                res.status(200).json({message: `lista ${req.params.id} excluído com sucesso!`});
            }
        }catch(error){
            console.log(error);
            
            res.status(500).json({message:error});
        }
    }
}

export default new ListaController();