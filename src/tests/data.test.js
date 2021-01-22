import { fetchResults } from '../utils/Data';

// test scenario: check is data (url & query) fetched

test('isDataFetched', () => {
  global.fetch = jest.fn();
  const urlBase = 'http://localhost:5000/results?q=';
  const query = '';
  fetchResults(query);
  expect(global.fetch).toBeCalledWith(urlBase + query);
});
