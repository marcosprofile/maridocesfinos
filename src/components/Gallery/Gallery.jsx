import React from 'react'
import { motion } from 'framer-motion'
import { GridContainer, GridItem, PaddingContainer } from '../../styles/Global.styled'
import { fadeInTopVariant } from '../../utils/Variants'
import Photos from '../../layouts/Photos'
import { gallery } from './../../utils/Data';

export default function Gallery() {
  return (
    <PaddingContainer marginTop="4rem" width="100%">
      <GridContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        gap="1.5rem"
        columns="repeat(3, 1fr)"
        responsiveGrid
        grid
      >
        {gallery.map((gallery) => (
          <GridItem responsiveCard key={gallery.id}>
            <Photos data={gallery} />
          </GridItem>
        ))}
      </GridContainer>
    </PaddingContainer>
  )
}
