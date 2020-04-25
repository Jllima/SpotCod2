import Api from './api';

const RecentlyHeardsService = {
  create: (id) => Api.post(`/api/v1/albums/${id}/recently_heards`),
}

export default RecentlyHeardsService;