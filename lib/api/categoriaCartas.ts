import { apiClient } from "./client";
import {
  CategoriaCartas,
  CreateCategoriaCartasDto,
  UpdateCategoriaCartasDto,
} from "@/types";

export const categoriaCartasApi = {
  getAll: async (params?: {
    nome?: string;
    tipo?: string;
    page?: number;
    limit?: number;
  }) => {
    const response = await apiClient.get<{
      data: CategoriaCartas[];
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>("/categoriaCartas", { params });

    return response.data;
  },

  getById: async (id: number) => {
    const response = await apiClient.get<{ dados: CategoriaCartas }>(
      `/categoriaCartas/${id}`
    );
    return response.data.dados;
  },

  create: async (data: CreateCategoriaCartasDto) => {
    const response = await apiClient.post<{ dados: CategoriaCartas }>(
      "/categoriaCartas",
      data
    );
    return response.data.dados;
  },

  update: async (id: number, data: UpdateCategoriaCartasDto) => {
    const response = await apiClient.put<{ dados: CategoriaCartas }>(
      `/categoriaCartas/${id}`,
      data
    );
    return response.data.dados;
  },

  delete: async (id: number) => {
    await apiClient.delete(`/categoriaCartas/${id}`);
  },
};
