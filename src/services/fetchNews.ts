import { DataType } from '../types';

async function fetchNews(
  page = 10,
) {
  const URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${page}`;
  try {
    const response = await fetch(URL);
    const data = await response.json() as DataType;
    return data.items;
  } catch (error) {
    console.error(error);
  }
}

export default fetchNews;
