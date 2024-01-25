import React from 'react';
import { motion } from 'framer-motion'

/* Components */
import ConsultButton from './Product/ConsultButton'
import Title from './Product/Title'
import HeaderProducts from './Product/HeaderProducts'
import { PaddingContainer, FlexContainer } from '../styles/Global.styled';

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


const MyProducts = () => {
  return (
    <PaddingContainer top="3rem" bottom="8rem" width="100%">
      <FlexContainer direction="column" align="center" gap="2rem">
        {/* Product 1 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Title titulo="Brigadeiros" />
          <HeaderProducts />
          <Brigadeiros />
          <ConsultButton value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>
        
        {/* Product 2 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Title titulo="Bombons" />
          <HeaderProducts />
          <Bombons />
          <ConsultButton value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>

        {/* Product 3 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Title titulo="Petty Verre" />
          <HeaderProducts />
          <PettyVerre />
          <ConsultButton value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>

        {/* Product 4 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Title titulo="Petty Tarte" />
          <HeaderProducts />
          <PettyTarte />
          <ConsultButton value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>

        {/* Product 5 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Title titulo="Copinhos trufados" />
          <HeaderProducts />
          <CopinhosTrufados />
          <ConsultButton value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>

        {/* Product 6 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Title titulo="Copinhos fondados" />
          <HeaderProducts />
          <CopinhosFondados />
          <ConsultButton value="Consultar mais sabores" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>

        {/* Product 7 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          align="center"
          responsivePadding
        >
          <Title titulo="Caixa de degustação" />
          <CaixaDeDegustacao />
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts