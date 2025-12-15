import { categoriaLeilaoApi } from "@/lib/api/categoriaLeilao";
import {
  CategoriaLeilao,
  CreateCategoriaLeilaoDto,
  UpdateCategoriaLeilaoDto,
} from "@/types";
import { toast } from "sonner";

export const categoriaLeilaoService = {
  async getAll(filtros?: {
    nome?: string;
    page?: number;
    limit?: number;
  }): Promise<{
    data: CategoriaLeilao[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }> {
    try {
      return await categoriaLeilaoApi.getAll(filtros);
    } catch (error) {
      toast.error("Erro ao carregar categorias de leilão");
      throw error;
    }
  },

  async getById(id: number): Promise<CategoriaLeilao> {
    try {
      return await categoriaLeilaoApi.getById(id);
    } catch (error) {
      toast.error("Erro ao carregar categoria de leilão");
      throw error;
    }
  },

  async create(data: CreateCategoriaLeilaoDto): Promise<CategoriaLeilao> {
    if (!data.nome?.trim()) {
      toast.error("Nome da categoria é obrigatório");
      throw new Error("Nome inválido");
    }

    try {
      const categoria = await categoriaLeilaoApi.create(data);
      toast.success("Categoria de leilão criada com sucesso");
      return categoria;
    } catch (error) {
      toast.error("Erro ao criar categoria de leilão");
      throw error;
    }
  },

  async update(
    id: number,
    data: UpdateCategoriaLeilaoDto
  ): Promise<CategoriaLeilao> {
    try {
      const categoria = await categoriaLeilaoApi.update(id, data);
      toast.success("Categoria de leilão atualizada com sucesso");
      return categoria;
    } catch (error) {
      toast.error("Erro ao atualizar categoria de leilão");
      throw error;
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await categoriaLeilaoApi.delete(id);
      toast.success("Categoria de leilão removida com sucesso");
    } catch (error) {
      toast.error("Erro ao remover categoria de leilão");
      throw error;
    }
  },
};
