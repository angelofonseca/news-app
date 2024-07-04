import { InitialDataType } from '../types';

async function fetchNews(pageParam: number, category: string) {
  let URL;

  switch (category) {
    case 'noticia':
      URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia&page=${pageParam}`;
      break;
    case 'release':
      URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release&page=${pageParam}`;
      break;
    case 'favoritas':
      return;
    default:
      URL = `https://servicodados.ibge.gov.br/api/v3/noticias/?page=${pageParam}`;
      break;
  }

  try {
    const response = await fetch(URL);
    const data = await response.json() as InitialDataType;

    // Converte a string para objeto e pega somente a image_intro com a url sendo passada.
    const newItems = data.items.map(({ imagens, ...item }) => {
      const parsedImagens = JSON.parse(imagens);
      const updatedImagens = {
        image_intro: `https://agenciadenoticias.ibge.gov.br/${parsedImagens.image_intro}`,
      };
      return {
        ...item,
        imagens: updatedImagens,
      };
    });
    return { ...data, items: newItems };
  } catch (error) {
    console.error(error);
  }
}

export default fetchNews;
