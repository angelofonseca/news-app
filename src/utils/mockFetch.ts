import { Item } from '../types';
import MOCK_DATA from './mockAPIData.json';

export async function mockFetchNews(): Promise<Item[]> {
  await new Promise((resolve) => { setTimeout(resolve, 1000); });
  const news = MOCK_DATA.items;
  return news;
}
