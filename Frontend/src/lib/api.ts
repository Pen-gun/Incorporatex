import type { ApiResponse, Company, CreateCompanyInput, ShareholderInput } from '../types/api';
import api from './axios';

export async function createCompany(input: CreateCompanyInput): Promise<Company> {
  const res = await api.post<ApiResponse<Company>>('/companies', input);
  return res.data.data;
}

export async function getAllCompanies(): Promise<Company[]> {
  const res = await api.get<ApiResponse<Company[]>>('/companies');
  return res.data.data;
}

export async function getCompanyById(id: string): Promise<Company> {
  const res = await api.get<ApiResponse<Company>>(`/companies/${id}`);
  return res.data.data;
}

export async function submitCompany(id: string): Promise<Company> {
  const res = await api.patch<ApiResponse<Company>>(`/companies/${id}/submit`);
  return res.data.data;
}

export async function replaceShareholders(
  companyId: string,
  shareholders: ShareholderInput[],
): Promise<Company> {
  const res = await api.put<ApiResponse<Company>>(`/companies/${companyId}/shareholders`, {
    shareholders,
  });
  return res.data.data;
}
