import axios, {AxiosResponse} from 'axios'
import { obterTarefas } from './cliente'

const URL_BASE = 'http://localhost:3000/api';
interface Tarefa {
    id: number;
    descricao: string;
}
export async function obterTarefas(): Promise<Tarefa[]> {
    try{
        const response: AxiosResponse<Tarefa[]> = await axios.get(`${URL_BASE}/tarefas`)
        return response.data
    } catch (error) {
        console.error('Erro ao obter tarefas', error)
        return []
    }
}

async function executarExemplos(): Promise<void> {
    //listar tarefas
    console.log('listar tarefas:')
    const tarefas = await obterTarefas()
    console.log(tarefas)
}
executarExemplos()
//outras funções para criar, atualizar e excluir tarefas