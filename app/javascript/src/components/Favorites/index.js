import React, { Fragment, useState, useEffect } from 'react';
import FavoritesService from '../../services/favorite'
import ResultsTabs from '../../components/common/ResultsTabs'

export default function Favorites() {
  const [favorites, setFavorites] = useState({});

  async function fetchFavorites() {
    const response = await FavoritesService.index();
    await setFavorites(response.data);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);
  return (
    <Fragment>
      <ResultsTabs albums={favorites.albums || []} artists={favorites.artists || []} songs={favorites.songs || []} />
    </Fragment>
  )
}
