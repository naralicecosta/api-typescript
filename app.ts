import express, { Request, Response} from 'express';

//inicializando a aplicação express
const app = express()
const PORT = process.env.PORT || 3000

//configurando uma rota incial para exibir uma mensagem de boas-vindas
app.get('/', (req: Request, res: Response) => {
    res.send('Bem-vindo a API de tarefas!')
})

//inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

