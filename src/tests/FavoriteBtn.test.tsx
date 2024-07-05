import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';
import { MOCK_TRUE_RESPONSE } from '../utils/mockResponse';

mockAllIsIntersecting(false);

describe('Testa o componente FavoriteBtn', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_TRUE_RESPONSE);
  });
  afterEach(() => { vi.clearAllMocks(); });
  it('Testa o clique no coração dos favoritos', async () => {
    const { user } = customRender(<App />);
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    const heartBtn = screen.getAllByTestId('heart-icon')[0];
    await user.click(heartBtn);
  });
});
