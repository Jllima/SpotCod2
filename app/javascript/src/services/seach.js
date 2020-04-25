import Api from './api';

const SearchService = {
  index: (query) => Api.get(`/api/v1/search?query=${query}`)
}

export default SearchService;