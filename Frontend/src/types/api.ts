export type CompanyStatus = 'DRAFT' | 'SUBMITTED';

export interface Shareholder {
  id: string;
  firstName: string;
  lastName: string;
  nationality: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: string;
  name: string;
  numberOfShareholders: number;
  totalCapitalInvested: string;
  status: CompanyStatus;
  shareholders: Shareholder[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

export interface CreateCompanyInput {
  name: string;
  numberOfShareholders: number;
  totalCapitalInvested: string;
}

export interface ShareholderInput {
  firstName: string;
  lastName: string;
  nationality: string;
}
