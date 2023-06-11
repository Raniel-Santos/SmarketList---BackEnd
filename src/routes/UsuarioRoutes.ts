import { Router } from "express";
import { UsuarioController } from "../controllers";
import { authorization } from "../middlewares";


const routes = Router();

routes.get('/buscar/:id', authorization, UsuarioController.buscarUsuarioById);
routes.get('/buscar', authorization, UsuarioController.buscarUsuario);
routes.get('/buscar-lista', authorization, UsuarioController.buscarListasUsuario)
routes.post('/cadastrar', UsuarioController.cadastrarUsuario);
routes.put('/atualizar/:id', UsuarioController.atualizarUsuario);
routes.delete('/excluir/:id', UsuarioController.excluirUsuario);

export default routes;