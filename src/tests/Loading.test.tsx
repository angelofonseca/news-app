import { describe, it, vi } from 'vitest';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import * as ReactQuery from 'react-query';
import customRender from '../utils/customRender';
import '@testing-library/jest-dom';
import MOCK_PAGE_1_DATA from '../utils/mockFirstPage.json';
import MOCK_PAGE_2_DATA from '../utils/mockSecondPage.json';
import App from '../App';

mockAllIsIntersecting(true);
// const mockUseInfiniteQueryResult: ReactQuery.UseInfiniteQueryResult<any, any> = {
//   data: MOCK_PAGE_1_DATA, // Your existing MOCK_DATA fits here as the data property
//   error: null, // Assuming no error for the mock
//   fetchNextPage: MOCK_PAGE_2_DATA, // Mock implementation of fetchNextPage
//   hasNextPage: false, // Depending on your MOCK_DATA, adjust accordingly
//   isFetching: false, // Assuming not fetching initially
//   isFetchingNextPage: false, // Assuming not fetching next page initially
//   status: 'success', // Assuming the mock should represent a successful fetch
//   // Add other properties as needed based on UseInfiniteQueryResult
// };
// vi.spyOn(ReactQuery, 'useInfiniteQuery').mockReturnValue(mockUseInfiniteQueryResult);
describe('MyComponent', () => {
  it('', async () => {
    customRender(<App />);

    // await waitForElementToBeRemoved(() => screen.getByTestId('loader'));

    screen.debug();
  });
});
