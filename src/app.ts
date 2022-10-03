import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import parser from 'body-parser';
import AppError from './shared/errors/app-error';


const app = express();

app.use(parser.json({ type: 'application/json' }));
app.use(cors({ credentials: true, origin: true }));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
    });
});

app.get('/', (req, res) => {
    res.send('API running!');
});

export default app;