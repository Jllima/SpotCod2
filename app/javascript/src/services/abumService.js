import api from './api'

const albumService = {
  index: () => api.get('dasboard')  
}

export default albumService