import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/NavbarFooter'
import Discovery from '../../components/Discovery'
import SectionWrapper from '../../components/common/SectionWrapper'

export default function DiscoveryPage() {
  return (
    <Fragment>
      <Fragment>
        <SectionWrapper>
          <Discovery />
        </SectionWrapper>
        <NavbarFooter />
      </Fragment>
    </Fragment>
  )
}