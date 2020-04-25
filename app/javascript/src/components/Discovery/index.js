import React, { Fragment, useState, useEffect } from 'react';
import Album from '../common/Album'
import styled from 'styled-components';
import { Columns, Heading } from 'react-bulma-components';
import abumService from '../../services/abumService'

const DivVSpaced = styled.div`
  margin-top: 50px;
`

export default function Discovery() {

  const [recommendedAlbums, serRecommendedAlbums] = useState([])
  const [recentAlbums, setRecentAlbums] = useState([]);

  async function loadAlbuns() {
    try {
      const response = await abumService.index()

      serRecommendedAlbums(response.data.recommended_albums)
      setRecentAlbums(response.data.recent_albums)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    loadAlbuns()
  }, [])

  const recent_albums_components = recentAlbums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id} />
    </Columns.Column>
  );

  const recommended_albums_components = recommendedAlbums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id} />
    </Columns.Column>
  );

  return (

    <Fragment>
      {recent_albums_components.length > 0 &&
        <div>
          <Heading className='has-text-white' size={4}>
            Tocadas recentemente
      </Heading>
          <Columns className='is-mobile'>
            {recent_albums_components}
          </Columns>
        </div>
      }

      {recommended_albums_components.length > 0 &&
        <DivVSpaced>
          <Heading className='has-text-white' size={4}>
            Recomendadas
        </Heading>
          <Columns className='is-mobile'>
            {recommended_albums_components}
          </Columns>
        </DivVSpaced>
      }
    </Fragment>
  )
}