import express, { Request, Response} from 'express';
import tarefaRoutes from './routes/tarefaRoutes'

//inicializando a aplicação express
const app = express()
const PORT = process.env.PORT || 3000

// Configurando as rotas da aplicação para utilizar as rotas relacionadas às tarefas
app.use('/api', tarefaRoutes)

//configurando uma rota incial para exibir uma mensagem de boas-vindas
app.get('/', (req: Request, res: Response) => {
    res.send('Bem-vindo a API de tarefas!')
})

//inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

