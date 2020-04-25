import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Columns, Heading, Image } from 'react-bulma-components';
import { Link } from "react-router-dom";

const DivVSpaced = styled.div`
  margin-top: 50px;
`

export default function Album(props) {
  return (
    <Fragment>
      <Image src={props.cover_url}/>
      <DivVSpaced>
        <Heading size={6} className='has-text-white'>{props.title}</Heading>
        <Heading size={6} className='has-text-white' subtitle>{props.artist_name}</Heading>
          <Link to={`/album/${props.id}`}>
            ...
          </Link>
      </DivVSpaced>
    </Fragment>
  )
}