import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json(
    {
        limit: '10mb',
    }
))
app.use(express.urlencoded({
    extended: true,
    limit: '10mb',
}))
app.use(express.static('public'))
app.use(cookieParser())

// Routes import
import companyRoutes from './routes/company.routes';

// API routes
app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
});

app.use('/api/companies', companyRoutes);

app.use(errorHandler);
export default app;
