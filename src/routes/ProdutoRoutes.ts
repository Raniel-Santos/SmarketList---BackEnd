import { Router } from "express";
import { ProdutoController } from "../controllers";


const routes = Router();

routes.get('/buscar/:id', ProdutoController.buscarProduto);
routes.post('/cadastrar', ProdutoController.cadastrarProduto);
routes.put('/atualizar-status/:id',ProdutoController.statusProduto)
routes.put('/atualizar/:id', ProdutoController.atualizarProduto);
routes.delete('/excluir/:id', ProdutoController.excluirProduto);

export default routes;