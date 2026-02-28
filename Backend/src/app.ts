import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
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
app.use('/api/companies', companyRoutes);

app.use(errorHandler);
export default app;
