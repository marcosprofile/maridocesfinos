import React from 'react'
import { motion } from 'framer-motion'

/* Components */
import Button from './Button/Button'
import { PaddingContainer, FlexContainer } from '../styles/Global.styled'

/* Products */
import Brigadeiros from './Products/Brigadeiros'
import Bombons from './Products/Bombons'
import PettyVerre from './Products/PettyVerre'
import PettyTarte from './Products/PettyTarte'
import CopinhosTrufados from './Products/CopinhosTrufados'
import CopinhosFondados from './Products/CopinhosFondados'
import CaixaDeDegustacao from './Products/CaixaDeDegustacao'

/* Animations */
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'
import ContainerItems from './Product/ContainerItems'


const MyProducts = () => {
  return (
    <PaddingContainer top="3rem" bottom="8rem" width="100%">
      <FlexContainer direction="column" align="center" gap="2rem">
        {/* Product 1 */}
        <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
          <Brigadeiros />
          <FlexContainer justify="center" top="2rem">
            <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
        </ContainerItems>
        
        {/* Product 2 */}
        <ContainerItems motion={motion.div} slide={fadeInRightVariant}>
          <Bombons />
          <FlexContainer justify="center" top="2rem">
            <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
        </ContainerItems>

        {/* Product 3 */}
        <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
          <PettyVerre />
          <FlexContainer justify="center" top="2rem">
            <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
        </ContainerItems>

        {/* Product 4 */}
        <ContainerItems motion={motion.div} slide={fadeInRightVariant}>
          <PettyTarte />
          <FlexContainer justify="center" top="2rem">
            <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
        </ContainerItems>

        {/* Product 5 */}
        <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
          <CopinhosTrufados />
          <FlexContainer justify="center" top="2rem">
            <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
        </ContainerItems>

        {/* Product 6 */}
        <ContainerItems motion={motion.div} slide={fadeInRightVariant}>
          <CopinhosFondados />
          <FlexContainer justify="center" top="2rem">
            <Button color="Primary" value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
          </FlexContainer>
        </ContainerItems>

        {/* Product 7 */}
        <ContainerItems motion={motion.div} slide={fadeInLeftVariant}>
          <CaixaDeDegustacao />
        </ContainerItems>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts