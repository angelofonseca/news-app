import { describe, it } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';
import '@testing-library/jest-dom';

mockAllIsIntersecting(false);

describe('Testa o componente FavoriteBtn', () => {
  it('Testa o clique no coração dos favoritos', async () => {
    const { user } = customRender(<App />);
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const heartBtn = screen.getAllByTestId('heart-icon')[0];
    await user.click(heartBtn);
  });
});
