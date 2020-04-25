import Api from './api';

const FavoritesService = {
  index: () => Api.get('/api/v1/favorites'),
  create: (kind, id) => Api.post(`/api/v1/${kind}/${id}/favorite`),
  delete: (kind, id) => Api.delete(`/api/v1/${kind}/${id}/favorite`)
}

export default FavoritesService;