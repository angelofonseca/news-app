import { beforeAll, vi } from 'vitest';

export const mockIntersectionObserver = () => {
  beforeAll(() => {
    window.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
      observe: () => {
        callback([{ isIntersecting: true }], this);
      },
      unobserve: () => {},
      disconnect: () => {},
    }));
  });
};
