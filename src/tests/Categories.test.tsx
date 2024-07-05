import { describe, it, expect } from 'vitest';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';

mockAllIsIntersecting(false);

describe('Testa o componente Categories', () => {
  it('Testa se ao clicar no botao de Favoritas ele recebe a classe selected', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const favoritas = screen.getByRole('button', { name: /favoritas/i });
    await user.click(favoritas);

    await waitFor(() => {
      const updatedFavoritas = screen.getByRole('button', { name: /favoritas/i });
      expect(updatedFavoritas.className).toContain('selected');
    });
  });
  it('Testa se ao clicar no botao de Release ele recebe a classe selected', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const release = screen.getByRole('button', { name: /release/i });
    await user.click(release);

    await waitFor(() => {
      const updatedRelease = screen.getByRole('button', { name: /release/i });
      expect(updatedRelease.className).toContain('selected');
    });
  });
  it('Testa se ao clicar no botao de Notícia ele recebe a classe selected', async () => {
    const { user } = customRender(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const noticia = screen.getByRole('button', { name: /notícia/i });
    await user.click(noticia);

    await waitFor(() => {
      const updatedNoticia = screen.getByRole('button', { name: /notícia/i });
      expect(updatedNoticia.className).toContain('selected');
    });
  });
});
