import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/NavbarFooter'
import SectionWrapper from '../../components/common/SectionWrapper'
import Search from '../../components/Search'
import { Heading } from 'react-bulma-components';
import SeachBar from '../../components/Search/SearchBar'

export default function SearchPage() {
  return (
    <Fragment>
      <SectionWrapper>
        <Heading className='has-text-centered has-text-white'>Buscar</Heading>
        <Search />
      </SectionWrapper>
      <NavbarFooter />
    </Fragment>
  )
}