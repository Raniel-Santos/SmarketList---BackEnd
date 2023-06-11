import { Router } from "express";
import { ListaController } from "../controllers";
import { authorization } from "../middlewares";



const routes = Router();

routes.get('/buscar/', ListaController.buscarLista);
routes.get('/buscar/:id', ListaController.buscarListaPorId);
routes.post('/cadastrar', authorization ,ListaController.cadastrarLista);
routes.post('/cadastrar-produto/:id', ListaController.adicionarProdutoLista)
routes.put('/atualizar/:id', ListaController.atualizarLista);
routes.delete('/excluir/:id', ListaController.excluirLista);
routes.put('/finalizar/:id', ListaController.finalizarLista)

export default routes;