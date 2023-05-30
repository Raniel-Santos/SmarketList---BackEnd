import { Router } from "express";
import { ListaController } from "../controllers";



const routes = Router();

routes.get('/buscar/:id', ListaController.buscarLista);
routes.post('/cadastrar', ListaController.cadastrarLista);
routes.put('/atualizar/:id', ListaController.atualizarLista);
routes.delete('/excluir/:id', ListaController.excluirLista);

export default routes;