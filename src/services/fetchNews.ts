import { DataType, Item } from '../types';

async function fetchNews(
  page = 10,
) {
  const URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${page}`;
  try {
    const response = await fetch(URL);
    const { items } = await response.json() as DataType;

    // Converte a string para objeto e pega somente a image_intro com a url sendo passada.
    const data = items.map(({ imagens, ...item }) => {
      const parsedImagens = JSON.parse(imagens);
      const updatedImagens = {
        image_intro: `https://agenciadenoticias.ibge.gov.br/${parsedImagens.image_intro}`,
      };
      return {
        ...item,
        imagens: updatedImagens,
      };
    });
    console.log(data);

    return data as Item[];
  } catch (error) {
    console.error(error);
  }
}

export default fetchNews;
