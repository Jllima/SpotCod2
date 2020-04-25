import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/NavbarFooter'
import SectionWrapper from '../../components/common/SectionWrapper'
import Albums from '../../components/Albums'

export default function AlbumPage(){
  return (
    <Fragment>
      <SectionWrapper>
        <Albums />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  )
}