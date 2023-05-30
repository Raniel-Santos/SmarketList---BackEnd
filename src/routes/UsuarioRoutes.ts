import { Router } from "express";
import { UsuarioController } from "../controllers";


const routes = Router();

routes.get('/buscar/:id', UsuarioController.buscarUsuario);
routes.post('/cadastrar', UsuarioController.cadastrarUsuario);
routes.put('/atualizar/:id', UsuarioController.atualizarUsuario);
routes.delete('/excluir/:id', UsuarioController.excluirUsuario);

export default routes;