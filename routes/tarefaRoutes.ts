import express from 'express';
import { listarTarefas, criarTarefa} from '../controllers/tarefaController'

const router = express.Router();
//rotas para operações CRUD de tarefas
router.get('/tarefas', listarTarefas)
router.post('/tarefas', criarTarefa);
// router.put('/tarefas/:id', atualizarTarefa);
// router.delete('/tarefas/:id', excluirTarefa);
export default router