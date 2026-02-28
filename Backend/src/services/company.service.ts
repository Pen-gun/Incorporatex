import prisma from '../db/prisma';
import ApiError from '../utils/ApiError';
import type { Company, Shareholder } from '@prisma/client';

type CompanyWithShareholders = Company & { shareholders: Shareholder[] };

interface CreateCompanyInput {
    name: string;
    numberOfShareholders: number;
    totalCapitalInvested: string;
}

interface UpdateCompanyInput {
    name?: string;
    numberOfShareholders?: number;
    totalCapitalInvested?: string;
}

interface ShareholderInput {
    firstName: string;
    lastName: string;
    nationality: string;
}

export async function createCompany(data: CreateCompanyInput): Promise<CompanyWithShareholders> {
    return prisma.company.create({
        data: {
            name: data.name,
            numberOfShareholders: data.numberOfShareholders,
            totalCapitalInvested: data.totalCapitalInvested,
        },
        include: { shareholders: true },
    });
}

export async function getAllCompanies(): Promise<CompanyWithShareholders[]> {
    return prisma.company.findMany({
        include: { shareholders: true },
        orderBy: { createdAt: 'desc' },
    });
}

export async function getCompanyById(id: string): Promise<CompanyWithShareholders> {
    const company = await prisma.company.findUnique({
        where: { id },
        include: { shareholders: true },
    });
    if (!company) {
        throw new ApiError(404, 'Company not found');
    }
    return company;
}

export async function updateCompany(
    id: string,
    data: UpdateCompanyInput
): Promise<CompanyWithShareholders> {
    const existing = await getCompanyById(id);
    if (existing.status === 'SUBMITTED') {
        throw new ApiError(400, 'Cannot update a submitted company');
    }
    return prisma.company.update({
        where: { id },
        data,
        include: { shareholders: true },
    });
}

export async function submitCompany(id: string): Promise<CompanyWithShareholders> {
    const existing = await getCompanyById(id);
    if (existing.status === 'SUBMITTED') {
        throw new ApiError(400, 'Company already submitted');
    }
    if (existing.shareholders.length === 0) {
        throw new ApiError(400, 'Company must have at least one shareholder before submitting');
    }
    return prisma.company.update({
        where: { id },
        data: { status: 'SUBMITTED' },
        include: { shareholders: true },
    });
}

export async function replaceShareholders(
    companyId: string,
    shareholders: ShareholderInput[]
): Promise<CompanyWithShareholders> {
    const existing = await getCompanyById(companyId);
    if (existing.status === 'SUBMITTED') {
        throw new ApiError(400, 'Cannot modify shareholders of a submitted company');
    }

    await prisma.$transaction([
        prisma.shareholder.deleteMany({ where: { companyId } }),
        prisma.shareholder.createMany({
            data: shareholders.map((s) => ({
                firstName: s.firstName,
                lastName: s.lastName,
                nationality: s.nationality,
                companyId,
            })),
        }),
    ]);

    return getCompanyById(companyId);
}
