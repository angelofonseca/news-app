import { afterEach, describe, expect, it } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';
import '@testing-library/jest-dom';

mockAllIsIntersecting(false);

describe('Testa o componente Favorites', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('Testa se não há favoritos na sessão de favoritos', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const favoritas = screen.getByRole('button', { name: /favoritas/i });
    await user.click(favoritas);

    const noFavorites = screen.getByRole('heading', { name: /não há notícias favoritadas/i });
    expect(noFavorites).toBeInTheDocument();
  });

  it('Testa se há pelo menos uma notícia favoritada', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const heartBtn = screen.getAllByTestId('heart-icon')[0];
    await user.click(heartBtn);

    const favoritas = screen.getByRole('button', { name: /favoritas/i });
    await user.click(favoritas);

    const noFavorites = screen.queryByRole('heading', { name: /não há notícias favoritadas/i });
    expect(noFavorites).not.toBeInTheDocument();
  });
});
