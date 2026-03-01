import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as companyApi from '../lib/api';
import type { CreateCompanyInput, ShareholderInput } from '../types/api';

const companyKeys = {
  all: ['companies'] as const,
  detail: (id: string) => ['companies', id] as const,
};

export function useCompanies() {
  return useQuery({
    queryKey: companyKeys.all,
    queryFn: companyApi.getAllCompanies,
  });
}

export function useCompany(id: string | null) {
  return useQuery({
    queryKey: companyKeys.detail(id!),
    queryFn: () => companyApi.getCompanyById(id!),
    enabled: !!id,
  });
}

export function useCreateCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateCompanyInput) => companyApi.createCompany(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: companyKeys.all });
    },
  });
}

export function useUpdateCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: CreateCompanyInput }) =>
      companyApi.updateCompany(id, input),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: companyKeys.detail(variables.id) });
      queryClient.invalidateQueries({ queryKey: companyKeys.all });
    },
  });
}

export function useReplaceShareholders() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      companyId,
      shareholders,
    }: {
      companyId: string;
      shareholders: ShareholderInput[];
    }) => companyApi.replaceShareholders(companyId, shareholders),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: companyKeys.detail(variables.companyId) });
      queryClient.invalidateQueries({ queryKey: companyKeys.all });
    },
  });
}

export function useSubmitCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => companyApi.submitCompany(id),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: companyKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: companyKeys.all });
    },
  });
}
