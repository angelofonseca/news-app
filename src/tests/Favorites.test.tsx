import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';
import '@testing-library/jest-dom';
import { MOCK_TRUE_RESPONSE } from '../utils/mockResponse';

mockAllIsIntersecting(false);

describe('Testa o componente Favorites', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_TRUE_RESPONSE);
  });
  afterEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('Testa se não há favoritos na sessão de favoritos', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const favoritas = screen.getByRole('button', { name: /favoritas/i });
    await user.click(favoritas);

    const noFavorites = screen.getByRole('heading', { name: /não há notícias favoritadas/i });
    expect(noFavorites).toBeInTheDocument();
  });

  it('Testa se ao clicar no botão de favoritar da primeira notícia ela está favoritada', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const heartBtn = screen.getAllByTestId('heart-icon')[0];
    await user.click(heartBtn);

    const favoritas = screen.getByRole('button', { name: /favoritas/i });
    await user.click(favoritas);

    const noFavorites = screen.queryByRole('heading', { name: /não há notícias favoritadas/i });
    expect(noFavorites).not.toBeInTheDocument();
  });

  it('Testa se ao clicar duas vezes no botao de favoritos da primeira notícia, a notícia não aparece nos favoritos', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const heartBtn = screen.getAllByTestId('heart-icon')[0];
    await user.click(heartBtn);
    await user.click(heartBtn);

    const favoritas = screen.getByRole('button', { name: /favoritas/i });
    await user.click(favoritas);

    const noFavorites = screen.queryByRole('heading', { name: /não há notícias favoritadas/i });
    expect(noFavorites).toBeInTheDocument();
  });
});
