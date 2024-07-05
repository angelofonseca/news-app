import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';
import { MOCK_TRUE_RESPONSE } from '../utils/mockResponse';
import '@testing-library/jest-dom';

mockAllIsIntersecting(false);

describe('Testa o fetchNews', () => {
  beforeEach(() => {
    vi.spyOn(window, 'fetch')
      .mockResolvedValue(MOCK_TRUE_RESPONSE);
  });
  afterEach(() => { vi.clearAllMocks(); });
  it('Verifica se está renderizando a notícia mais recente', async () => {
    customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    expect(screen.getByText(/notícia mais recente/i)).toBeInTheDocument();

    const newsTitle = screen.getByRole('heading', { name: /notícia teste/i });
    expect(newsTitle).toBeInTheDocument();
  });
});
