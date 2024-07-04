import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import customRender from '../utils/customRender';

beforeAll(() => {
  window.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
    observe: () => {
      callback([{ isIntersecting: true }], this);
    },
    unobserve: () => {
      // You can add cleanup logic here if needed
    },
    disconnect: () => {
      // Optional: Cleanup logic for when the observer is done
    },
  }));
});

afterAll(() => {
  vi.clearAllMocks();
});

describe('Testa a página Home', () => {
  it('Testa se o Header está presente', async () => {
    customRender(<App />);
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
    screen.debug();
  });
});
