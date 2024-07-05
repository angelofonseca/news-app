import { describe, it } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import customRender from '../utils/customRender';

mockAllIsIntersecting(true);

describe('Testa a página Home', () => {
  it('Testa se o Header está presente', async () => {
    customRender(<App />);
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
  });
});
