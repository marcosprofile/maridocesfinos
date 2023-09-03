import React from 'react';

import {
  Image,
  RouterLink,
  Heading,
  FlexContainer,
  DivImage,
  GridContainer,
  Price,
  Banner,
} from '../styles/Global.styled';

import Capa from '../assets/brigadeiros-gourmet.png'

const BrigadeirosGourmet = () => {
  return (
    <>
      <FlexContainer responsivePadding border radius="1.5rem" width="100%" maxWidth="748px" padding="2rem" direction="column" gap="1.5rem">
        <DivImage>
          <Image width="100%" src={Capa} />
          <Banner>Brigadeiros Gourmet</Banner>
        </DivImage>

        <FlexContainer direction="column">
          <Heading as="h3" size="h3" grey weight="600">
            Todos  os valores se referem a unidade no centro de doces
          </Heading>
          <Heading as="p" size="p" grey>
            (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
          </Heading>
        </FlexContainer>

        <GridContainer grid columns="1fr 1fr" gap=".75rem" responsiveGrid>
          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Merengue de limão</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 2,80</Price>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Romeu e julieta</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 2,70</Price>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Bicho de pé</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 2,50</Price>
            </FlexContainer>
          </FlexContainer>
          
          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Creme Brûlée</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 2,80</Price>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Limão Bloond</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 3,20</Price>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Côco com abacaxi</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 3,25</Price>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Uva Cristal</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 3,65</Price>
            </FlexContainer>
          </FlexContainer>
          
          <FlexContainer direction="column" align="center" radius=".5rem" border top=".75rem" right=".5rem" bottom="1.5rem" left=".75rem">
            <Heading grey as="h4" size="h4" weight="bold">Oreo</Heading>
            <Heading grey as="p" size="p">[Consultar informações]</Heading>
            <FlexContainer marginTop="1rem" marginBottom=".5rem" width="100%" justify="center">
              <Price>R$ 3,50</Price>
            </FlexContainer>
          </FlexContainer>
        </GridContainer>
        <FlexContainer marginTop="2rem" marginBottom="2rem" justify="center">
          <RouterLink
            top="1.5rem"
            bottom="1.5rem"
            left="3rem"
            right="3rem"
            justify="center"
            radius=".5rem"
            href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento"
            target="_blank"
            respLink
            primary
          >
            Consultar mais sabores
          </RouterLink>
        </FlexContainer>
      </FlexContainer>
    </>
  )
}

export default BrigadeirosGourmet;