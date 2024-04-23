import { Request, Response } from 'express';

interface Tarefa {
    id: number;
    descricao: string;
}

let tarefas: Tarefa[] = []
export const listarTarefas = (req: Request, res: Response): void => {
    res.json(tarefas)
}

export const criarTarefa = (req: Request, res: Response): void => {
    const { descricao }: { descricao: string } = req.body
    const novaTarefa: Tarefa = { id: tarefas.length+ 1, descricao }
    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)
}