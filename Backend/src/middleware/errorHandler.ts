import type { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError';

export function errorHandler(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
): void {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            statusCode: err.statusCode,
            data: err.data,
            message: err.message,
            success: err.success,
            errors: err.errors,
        });
        return;
    }

    // Prisma known errors
    if (err.constructor?.name === 'PrismaClientKnownRequestError') {
        const prismaErr = err as Error & { code: string };
        if (prismaErr.code === 'P2025') {
            res.status(404).json({
                statusCode: 404,
                data: null,
                message: 'Record not found',
                success: false,
                errors: [],
            });
            return;
        }
        if (prismaErr.code === 'P2002') {
            res.status(409).json({
                statusCode: 409,
                data: null,
                message: 'Duplicate record',
                success: false,
                errors: [],
            });
            return;
        }
    }

    console.error('Unhandled error:', err);
    res.status(500).json({
        statusCode: 500,
        data: null,
        message: 'Internal server error',
        success: false,
        errors: [],
    });
}
