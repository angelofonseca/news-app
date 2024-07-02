export interface DataType {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: InitialItem[];
}
export interface InitialItem {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: string;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}
export interface Item {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: Imagens;
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
}

interface Imagens {
  image_intro: string;
}
