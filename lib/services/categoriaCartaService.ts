import { categoriaCartasApi } from "@/lib/api/categoriaCartas";
import {
  CategoriaCartas,
  CreateCategoriaCartasDto,
  UpdateCategoriaCartasDto,
} from "@/types";
import { toast } from "sonner";

export const categoriaCartasService = {
  async getAll(filtros?: {
    nome?: string;
    tipo?: string;
    page?: number;
    limit?: number;
  }): Promise<{
    data: CategoriaCartas[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    try {
      return await categoriaCartasApi.getAll(filtros);
    } catch (error) {
      toast.error("Erro ao carregar categorias de cartas");
      throw error;
    }
  },

  async getById(id: number): Promise<CategoriaCartas> {
    try {
      return await categoriaCartasApi.getById(id);
    } catch (error) {
      toast.error("Erro ao carregar categoria de carta");
      throw error;
    }
  },

  async create(data: CreateCategoriaCartasDto): Promise<CategoriaCartas> {
    if (!data.nome?.trim()) {
      toast.error("Nome da categoria é obrigatório");
      throw new Error("Nome inválido");
    }

    try {
      const categoria = await categoriaCartasApi.create(data);
      toast.success("Categoria de carta criada com sucesso");
      return categoria;
    } catch (error) {
      toast.error("Erro ao criar categoria de carta");
      throw error;
    }
  },

  async update(
    id: number,
    data: UpdateCategoriaCartasDto
  ): Promise<CategoriaCartas> {
    try {
      const categoria = await categoriaCartasApi.update(id, data);
      toast.success("Categoria de carta atualizada com sucesso");
      return categoria;
    } catch (error) {
      toast.error("Erro ao atualizar categoria de carta");
      throw error;
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await categoriaCartasApi.delete(id);
      toast.success("Categoria de carta excluída com sucesso");
    } catch (error) {
      toast.error("Erro ao excluir categoria de carta");
      throw error;
    }
  },
};
