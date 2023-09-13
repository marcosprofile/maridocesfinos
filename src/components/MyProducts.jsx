import React from 'react';
import { motion } from 'framer-motion'

import {
  GridContainer,
  PaddingContainer,
  FlexContainer,
  Image,
  Banner,
  DivImage,
  Heading,
  RouterLink,
  Icon,
} from '../styles/Global.styled';

import List from '../layouts/List';

import Product_1 from '../assets/brigadeiros-gourmet.png'
import Product_2 from '../assets/bombons.png'
import Product_3 from '../assets/petty-verre.png'
import Product_4 from '../assets/petty-tarte.png'
import Product_5 from '../assets/copinhos-trufados.png'
import Product_6 from '../assets/classicos-fondados.png'
import Product_7 from '../assets/caixa-degustacao.png'

import {
  brigadeirosGourmetDetails,
  bombons,
  pettyVerre,
  pettyTarte,
  copinhosTrufados,
  classicosFondados,
} from './../utils/Data';

import { BsFillRecordFill } from 'react-icons/bs'

import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../utils/Variants';

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
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
          responsivePadding
          border
        >
          <DivImage>
            <Image width="100%" src={Product_1} />
            <Banner>Brigadeiros Gourmet</Banner>
          </DivImage>

          <FlexContainer direction="column">
            <Heading as="h3" size="h3" grey weight="600">
              Todos  os valores se referem a unidade no centro de doces
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

          <FlexContainer
            marginTop="2rem"
            justify="center"
            height="auto"
          >
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
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
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

          <FlexContainer
            marginTop="2rem"
            justify="center"
            height="auto"
          >
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
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
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

          <FlexContainer
            marginTop="2rem"
            justify="center"
            height="auto"
          >
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

        {/* Product 4 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_4} />
            <Banner>Petty Tarte</Banner>
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
            {pettyTarte.map((product) => (
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

          <FlexContainer
            marginTop="2rem"
            justify="center"
            height="auto"
          >
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

        {/* Product 5 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_5} />
            <Banner>Copinhos trufados</Banner>
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
            {copinhosTrufados.map((product) => (
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

          <FlexContainer
            marginTop="2rem"
            justify="center"
            height="auto"
          >
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

        {/* Product 6 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_6} />
            <Banner>Clássicos fondados</Banner>
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
            {classicosFondados.map((product) => (
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

          <FlexContainer
            marginTop="2rem"
            justify="center"
            height="auto"
          >
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

        {/* Product 7 */}
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          responsivePadding
          border
          radius="1.5rem"
          width="100%"
          maxWidth="800px"
          padding="2rem"
          direction="column"
          gap="1.5rem"
          top="5rem"
          bottom="5rem"
        >
          <DivImage>
            <Image width="100%" src={Product_7} />
            <Banner>Caixa de degustação</Banner>
          </DivImage>

          <FlexContainer direction="column">
            <Heading as="h3" size="h3" grey weight="600">
              Todos  os valores se referem a unidade no centro de doces
            </Heading>
            <Heading as="p" size="p" grey>
              (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
            </Heading>
          </FlexContainer>

          <FlexContainer
            direction="column"
            align="left"
            width="100%"
            gap="1.5rem"
          >
            <FlexContainer
              gap=".5rem"
            >
              <Icon
                top=".25rem"
                point
              >
                <BsFillRecordFill />
              </Icon>
              <Heading
                as="p"
                size="p"
                weight="400"
                bottom="0"
                align="left"
                grey
              >
                Sabores dos doces sortidos de acordo com a produção da semana
              </Heading>
            </FlexContainer>
            <FlexContainer
              gap=".5rem"
            >
              <Icon
                top=".25rem"
                point
              >
                <BsFillRecordFill />
              </Icon>
              <Heading
                as="p"
                size="p"
                weight="400"
                bottom="0"
                align="left"
                grey
              >
                Não possuímos serviços de entrega da caixa (retirar pessoalmente ou solicitar uber flash)
              </Heading>
            </FlexContainer>
            <FlexContainer
              gap=".5rem"
            >
              <Icon
                top=".25rem"
                point
              >
                <BsFillRecordFill />
              </Icon>
              <Heading
                as="p"
                size="p"
                weight="400"
                bottom="0"
                align="left"
                grey
              >
                A caixa contém 15 sabores sortidos
              </Heading>
            </FlexContainer>
            <FlexContainer
              gap=".5rem"
            >
              <Icon
                top=".25rem"
                point
              >
                <BsFillRecordFill />
              </Icon>
              <Heading
                as="p"
                size="p"
                weight="400"
                bottom="0"
                align="left"
                grey
              >
                Ofereçemos degustação presencial com agendamento
              </Heading>
            </FlexContainer>
            <FlexContainer
              gap=".5rem"
            >
              <Icon
                top=".25rem"
                point
              >
                <BsFillRecordFill />
              </Icon>
              <Heading
                as="p"
                size="p"
                weight="400"
                bottom="0"
                align="left"
                grey
              >
                Pagamento via pix no momento da reserva
              </Heading>
            </FlexContainer>
            <FlexContainer
              marginTop="2.5rem"
              align="center" 
              gap="1rem"
              direction="column"
              height="auto"
            >
              <RouterLink
                top="1.5rem"
                bottom="1.5rem"
                left="3rem"
                right="3rem"
                radius=".5rem"
                justify="center"
                align="center"
                gap=".75rem"
                href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20solicitar%20a%20degustação"
                target="_blank"
                respLink
                primary
              >
                Solicitar degustação
              </RouterLink>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default MyProducts
