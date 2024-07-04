import { createContext } from 'react';
import { NewsContextType } from '../types';

const NewsContext = createContext<NewsContextType | null>(null);

export default NewsContext;
