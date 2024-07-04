/* eslint-disable max-len */
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from 'react-query';

export type InitialDataType = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: InitialNewsType[];
};
export type InitialNewsType = {
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
};

export type DataType = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  items: NewsType[];
};

export type NewsType = {
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
};

type Imagens = {
  image_intro: string;
};

export type NewsContextType = {
  categorie: CategoriesType;
  setCategorie: React.Dispatch<React.SetStateAction<CategoriesType>>;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  newsData: InfiniteData<DataType | undefined> | undefined;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<DataType | undefined, unknown>>;
};

export type CategoriesType = 'recentes' | 'release' | 'noticia' | 'favoritas';
