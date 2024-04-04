import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Bem-vindo à API de login.');
});

app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (username === 'usuario' && password === 'senha') {
        res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas. Por favor, tente novamente.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

