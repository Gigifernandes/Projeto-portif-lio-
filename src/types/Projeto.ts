export interface Projeto {
    id: number;
    titulo: string;
    categoria: 'Finalização de bimestre' | 'Documentação' | 'JS'  | 'Desing'
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagens: string[];
    codigoUrl?: string;
}