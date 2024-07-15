import { InitialDataType } from '../../types';

async function fetchNews(pageParam: number, category: string) {
  if (category === 'favoritas') return;

  const URL = category === 'recentes'
    ? `https://servicodados.ibge.gov.br/api/v3/noticias/?page=${pageParam}`
    : `https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=${category}&page=${pageParam}`;

  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('');
    const data = await response.json() as InitialDataType;

    // Converte a string para objeto e pega somente a image_intro com a url sendo passada.
    const newItems = data.items.map(({ imagens, ...item }) => {
      let parsedImages;
      if (typeof imagens === 'string') {
        parsedImages = JSON.parse(imagens);
      } else {
        parsedImages = imagens;
      }
      const updatedImages = {
        image_intro: `https://agenciadenoticias.ibge.gov.br/${parsedImages.image_intro}`,
      };

      const newItem = { ...item, imagens: updatedImages };

      return newItem;
    });
    return { ...data, items: newItems };
  } catch (error) {
    console.error(error);
  }
}

export default fetchNews;
