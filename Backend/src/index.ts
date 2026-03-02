import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import prisma from './db/prisma';

const PORT = process.env.PORT || 8000;

// Test database connection
async function startServer() {
    try {
        // Actually test the connection with a query
        await prisma.$queryRaw`SELECT 1`;
        console.log('Database connected successfully');
        
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

startServer();
