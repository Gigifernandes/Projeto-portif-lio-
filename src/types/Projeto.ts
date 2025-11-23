export interface Projeto {
    id: number;
    titulo: string;
    categoria: 'Projetos de conclusão de aprendizado' | 'Documentação' | 'Backend'
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagens: string[];
    codigoUrl?: string;
}