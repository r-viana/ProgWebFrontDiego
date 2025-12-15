import { niveisUsuarioApi } from "@/lib/api/niveisUsuario";
import { toast } from "sonner";
import {
  NivelUsuario,
  CreateNivelUsuarioDto,
  UpdateNivelUsuarioDto,
} from "@/types";

export const nivelUsuarioService = {
  async getAll(filtros?: {
    nome?: string;
    corIdentificacao?: string;
    page?: number;
    limit?: number;
  }): Promise<NivelUsuario[]> {
    try {
      return await niveisUsuarioApi.getAll(filtros);
    } catch (error) {
      toast.error("Erro ao carregar níveis de usuário");
      throw error;
    }
  },

  async getById(id: number): Promise<NivelUsuario> {
    try {
      return await niveisUsuarioApi.getById(id);
    } catch (error) {
      toast.error("Erro ao carregar nível");
      throw error;
    }
  },

  async create(dados: CreateNivelUsuarioDto): Promise<NivelUsuario> {
    if (!dados.nome?.trim()) {
      toast.error("Nome do nível é obrigatório");
      throw new Error("Nome inválido");
    }

    try {
      const nivel = await niveisUsuarioApi.create(dados);
      toast.success("Nível criado com sucesso!");
      return nivel;
    } catch (error) {
      toast.error("Erro ao criar nível");
      throw error;
    }
  },

  async update(
    id: number,
    dados: UpdateNivelUsuarioDto
  ): Promise<NivelUsuario> {
    try {
      const nivel = await niveisUsuarioApi.update(id, dados);
      toast.success("Nível atualizado com sucesso!");
      return nivel;
    } catch (error) {
      toast.error("Erro ao atualizar nível");
      throw error;
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await niveisUsuarioApi.delete(id);
      toast.success("Nível removido com sucesso!");
    } catch (error) {
      toast.error("Erro ao remover nível");
      throw error;
    }
  },
};
