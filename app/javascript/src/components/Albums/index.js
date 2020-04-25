import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import abumService from '../../services/abumService'
import { useParams } from 'react-router-dom'
import albumService from '../../services/abumService';
import Musics from '../../components/Musics'

const DivVSpaced = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
export default function Abums() {
  const [ album, setAlbum ] = useState({})
  let { id } = useParams()

  async function fetchAlbum(){
    try {
      const response = await albumService.show(id)
      setAlbum(response.data)
    } catch (error) {
      alert(error)   
    }
  }

  useEffect(()=>{
    fetchAlbum()
  },[])

  return (
    <Fragment>
      <Columns className='is-vcentered is-mobile is-centered'>
        <Columns.Column desktop={{ size: 3 }} className='has-text-centered'>
          <Image src={album.cover_url} />
          <DivVSpaced>
            <Heading size={5} className='has-text-white'>{album.title}</Heading>
            <Heading size={6} subtitle className='has-text-white'>{album.artist_name}</Heading>
          </DivVSpaced>
        </Columns.Column>
      </Columns>
      <Musics songs={album.songs || []}/>
    </Fragment>
  )
}