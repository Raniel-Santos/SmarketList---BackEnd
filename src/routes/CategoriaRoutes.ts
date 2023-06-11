import { Router } from "express";
import { CategoriaController } from "../controllers";


const routes = Router();

routes.get('/buscar/:id', CategoriaController.buscarCategoriaPorId);
routes.get('/buscar/', CategoriaController.buscarCategoria);
routes.post('/cadastrar', CategoriaController.cadastrarCategoria);
routes.put('/atualizar/:id', CategoriaController.editarCategoria);
routes.delete('/excluir/:id', CategoriaController.excluirCategoria);

export default routes;