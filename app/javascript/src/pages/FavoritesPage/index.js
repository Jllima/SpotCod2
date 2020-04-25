import React, { Fragment} from 'react';
import NavbarFooter from '../../components/common/NavbarFooter'
import SectionWrapper from '../../components/common/SectionWrapper';
import { Heading } from 'react-bulma-components';
import Favorites from '../../components/Favorites';

export default function FavoritesPage() {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Favoritos</Heading>
        <Favorites />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  )
}