import React from 'react';

import {
  GridContainer,
  PaddingContainer,
  FlexContainer,
  Image,
  Banner,
  DivImage,
  Heading,
  RouterLink,
} from '../styles/Global.styled';

import List from '../layouts/List';

import Product_1 from '../assets/brigadeiros-gourmet.png'
import Product_2 from '../assets/bombons.png'
import Product_3 from '../assets/petty-verre.png'

import {
  brigadeirosGourmetDetails,
  bombons,
  pettyVerre
} from './../utils/Data';

const MyProducts = () => {
  return (
    <PaddingContainer
      top="3rem"
      bottom="8rem"
      width="100%"
    >
      <FlexContainer
        direction="column"
        align="center"
        gap="2rem"
      >
        {/* Product 1 */}
        <FlexContainer
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="748px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_1} />
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
            {brigadeirosGourmetDetails.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                top=".75rem"
                right=".5rem"
                bottom="1.5rem"
                left=".75rem"
                border
                key={product.id}
              >
                <List data={product} />
              </FlexContainer>
            ))}
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
        
        {/* Product 2 */}
        <FlexContainer
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="748px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_2} />
            <Banner>Bombons</Banner>
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
            {bombons.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                top=".75rem"
                right=".5rem"
                bottom="1.5rem"
                left=".75rem"
                border
                key={product.id}
              >
                <List data={product} />
              </FlexContainer>
            ))}
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

        {/* Product 3 */}
        <FlexContainer
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="748px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_3} />
            <Banner>Petty Verre</Banner>
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
            {pettyVerre.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                top=".75rem"
                right=".5rem"
                bottom="1.5rem"
                left=".75rem"
                border
                key={product.id}
              >
                <List data={product} />
              </FlexContainer>
            ))}
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

      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts
