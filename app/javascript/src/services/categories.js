import Api from './api';

const CategoriesService = {
  show: (id) => Api.get(`/api/v1/categories/${id}`),
  index: () => Api.get('/api/v1/categories'),
}

export default CategoriesService;