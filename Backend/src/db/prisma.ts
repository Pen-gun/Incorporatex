import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// Parse DATABASE_URL to extract credentials
const url = new URL(process.env.DATABASE_URL!);

const pool = new pg.Pool({
    host: url.hostname,
    port: parseInt(url.port),
    user: url.username,
    password: String(url.password),
    database: url.pathname.slice(1),
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log: ['query', 'info', 'warn', 'error'],
});

export default prisma;
