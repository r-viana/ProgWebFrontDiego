import { apiClient } from "./client";
import {
  NivelUsuario,
  CreateNivelUsuarioDto,
  UpdateNivelUsuarioDto,
} from "@/types";

export const niveisUsuarioApi = {
  getAll: async (params?: {
    nome?: string;
    corIdentificacao?: string;
    page?: number;
    limit?: number;
  }) => {
    const response = await apiClient.get<{ dados: NivelUsuario[] }>(
      "/NivelUsuario",
      { params }
    );
    return response.data.dados;
  },

  getById: async (id: number) => {
    const response = await apiClient.get<{ dados: NivelUsuario }>(
      `/NivelUsuario/${id}`
    );
    return response.data.dados;
  },

  create: async (data: CreateNivelUsuarioDto) => {
    const response = await apiClient.post<{ dados: NivelUsuario }>(
      "/NivelUsuario",
      data
    );
    return response.data.dados;
  },

  update: async (id: number, data: UpdateNivelUsuarioDto) => {
    const response = await apiClient.put<{ dados: NivelUsuario }>(
      `/NivelUsuario/${id}`,
      data
    );
    return response.data.dados;
  },

  delete: async (id: number) => {
    await apiClient.delete(`/NivelUsuario/${id}`);
  },
};
