import type { Request, Response } from 'express';
import * as companyService from '../services/company.service';
import asyncHandler from '../utils/AsyncHandler';
import ApiResponse from '../utils/ApiResponse';

export const createCompany = asyncHandler(async (req: Request, res: Response) => {
    const { name, numberOfShareholders, totalCapitalInvested } = req.body;
    const company = await companyService.createCompany({
        name,
        numberOfShareholders,
        totalCapitalInvested,
    });
    res.status(201).json(new ApiResponse(201, company, 'Company created successfully'));
});

export const getAllCompanies = asyncHandler(async (_req: Request, res: Response) => {
    const companies = await companyService.getAllCompanies();
    res.json(new ApiResponse(200, companies, 'Companies retrieved successfully'));
});

export const getCompanyById = asyncHandler(async (req: Request, res: Response) => {
    const company = await companyService.getCompanyById(req.params.id as string);
    res.json(new ApiResponse(200, company, 'Company retrieved successfully'));
});

export const updateCompany = asyncHandler(async (req: Request, res: Response) => {
    const { name, numberOfShareholders, totalCapitalInvested } = req.body;
    const company = await companyService.updateCompany(req.params.id as string, {
        name,
        numberOfShareholders,
        totalCapitalInvested,
    });
    res.json(new ApiResponse(200, company, 'Company updated successfully'));
});

export const submitCompany = asyncHandler(async (req: Request, res: Response) => {
    const company = await companyService.submitCompany(req.params.id as string);
    res.json(new ApiResponse(200, company, 'Company submitted successfully'));
});

export const replaceShareholders = asyncHandler(async (req: Request, res: Response) => {
    const { shareholders } = req.body;
    const company = await companyService.replaceShareholders(req.params.id as string, shareholders);
    res.json(new ApiResponse(200, company, 'Shareholders updated successfully'));
});
