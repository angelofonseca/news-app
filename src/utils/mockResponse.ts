import mockFetchedData from './mockFetchedData.json';

export const MOCK_TRUE_RESPONSE = {
  ok: true,
  status: 200,
  json: async () => mockFetchedData,
} as Response;
