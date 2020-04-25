import api from './api'

const albumService = {
  index: () => api.get('/api/v1/dashboard'), 
  show: (id) => api.get(`/api/v1/albums/${id}`) 
}

export default albumService