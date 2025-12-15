import { apiClient } from "./client";
import {
  CategoriaLeilao,
  CreateCategoriaLeilaoDto,
  UpdateCategoriaLeilaoDto,
} from "@/types";

export const categoriaLeilaoApi = {
  getAll: async (params?: { nome?: string; page?: number; limit?: number }) => {
    const response = await apiClient.get<{
      data: CategoriaLeilao[];
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>("/CategoriaLeilao", { params });

    return response.data;
  },

  getById: async (id: number) => {
    const response = await apiClient.get<{ dados: CategoriaLeilao }>(
      `/CategoriaLeilao/${id}`
    );
    return response.data.dados;
  },

  create: async (data: CreateCategoriaLeilaoDto) => {
    const response = await apiClient.post<{ dados: CategoriaLeilao }>(
      "/CategoriaLeilao",
      data
    );
    return response.data.dados;
  },

  update: async (id: number, data: UpdateCategoriaLeilaoDto) => {
    const response = await apiClient.put<{ dados: CategoriaLeilao }>(
      `/CategoriaLeilao/${id}`,
      data
    );
    return response.data.dados;
  },

  delete: async (id: number) => {
    await apiClient.delete(`/CategoriaLeilao/${id}`);
  },
};
