import React from 'react';
import { motion } from 'framer-motion'

import {
  GridContainer,
  PaddingContainer,
  FlexContainer,
  Heading,
  RouterLink,
  Icon,
  BgColor,
} from '../styles/Global.styled';

import List from '../layouts/List';

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
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Brigadeiros
          </Heading>

          <FlexContainer direction="column" align="center">
            <BgColor
              direction="column"
              width="max-content"
              padding="1rem 2rem"
              color="Secondary"
              gap="1rem"
              respAction
            >
              <Heading as="h4" size="h4" grey weight="600">
                Todos  os valores se referem a unidade no centro de doces
              </Heading>
              <Heading as="p" size="p" grey>
                (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
              </Heading>
            </BgColor>
          </FlexContainer>

          <GridContainer gap="1rem" responsiveGrid>
            {brigadeirosGourmetDetails.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                overflow="hidden"
                width="100%"
                maxWidth="320px"
                minWidth="190px"
                border
                responsiveCard
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
              color="Primary"
              respLink
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
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Bombons
          </Heading>

          <FlexContainer direction="column" align="center">
            <BgColor
              direction="column"
              width="max-content"
              padding="1rem 2rem"
              color="Secondary"
              gap="1rem"
              respAction
            >
              <Heading as="h4" size="h4" grey weight="600">
                Todos  os valores se referem a unidade no centro de doces
              </Heading>
              <Heading as="p" size="p" grey>
                (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
              </Heading>
            </BgColor>
          </FlexContainer>

          <GridContainer gap="1rem" responsiveGrid>
            {bombons.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                overflow="hidden"
                width="100%"
                maxWidth="320px"
                minWidth="190px"
                border
                responsiveCard
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
              color="Primary"
              respLink
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
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Petty Verre
          </Heading>

          <FlexContainer direction="column" align="center">
            <BgColor
              direction="column"
              width="max-content"
              padding="1rem 2rem"
              color="Secondary"
              gap="1rem"
              respAction
            >
              <Heading as="h4" size="h4" grey weight="600">
                Todos  os valores se referem a unidade no centro de doces
              </Heading>
              <Heading as="p" size="p" grey>
                (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
              </Heading>
            </BgColor>
          </FlexContainer>

          <GridContainer gap="1rem" responsiveGrid>
            {pettyVerre.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                overflow="hidden"
                width="100%"
                maxWidth="320px"
                minWidth="190px"
                border
                responsiveCard
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
              color="Primary"
              respLink
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
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Petty Tarte
          </Heading>

          <FlexContainer direction="column" align="center">
            <BgColor
              direction="column"
              width="max-content"
              padding="1rem 2rem"
              color="Secondary"
              gap="1rem"
              respAction
            >
              <Heading as="h4" size="h4" grey weight="600">
                Todos  os valores se referem a unidade no centro de doces
              </Heading>
              <Heading as="p" size="p" grey>
                (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
              </Heading>
            </BgColor>
          </FlexContainer>

          <GridContainer gap="1rem" responsiveGrid>
            {pettyTarte.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                overflow="hidden"
                width="100%"
                maxWidth="320px"
                minWidth="190px"
                border
                responsiveCard
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
              color="Primary"
              respLink
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
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Copinhos trufados
          </Heading>

          <FlexContainer direction="column" align="center">
            <BgColor
              direction="column"
              width="max-content"
              padding="1rem 2rem"
              color="Secondary"
              gap="1rem"
              respAction
            >
              <Heading as="h4" size="h4" grey weight="600">
                Todos  os valores se referem a unidade no centro de doces
              </Heading>
              <Heading as="p" size="p" grey>
                (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
              </Heading>
            </BgColor>
          </FlexContainer>

          <GridContainer gap="1rem" responsiveGrid>
            {copinhosTrufados.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                overflow="hidden"
                width="100%"
                maxWidth="320px"
                minWidth="190px"
                border
                responsiveCard
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
              color="Primary"
              respLink
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
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Clássicos fondados
          </Heading>
          
          <FlexContainer direction="column" align="center">
            <BgColor
              direction="column"
              width="max-content"
              padding="1rem 2rem"
              color="Secondary"
              gap="1rem"
              respAction
            >
              <Heading as="h4" size="h4" grey weight="600">
                Todos  os valores se referem a unidade no centro de doces
              </Heading>
              <Heading as="p" size="p" grey>
                (quantidade mínima de qualquer sabor do cardápio: 25 unidades)
              </Heading>
            </BgColor>
          </FlexContainer>

          <GridContainer gap="1rem">
            {classicosFondados.map((product) => (
              <FlexContainer
                direction="column"
                align="center"
                radius=".5rem"
                overflow="hidden"
                width="100%"
                maxWidth="320px"
                minWidth="190px"
                border
                responsiveCard
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
              color="Primary"
              respLink
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
          radius="1.5rem"
          width="100%"
          direction="column"
          gap="1.5rem"
          margin="5rem 0"
          responsivePadding
        >
          <Heading as="h2" size="h2" weight="500" grey>
            Caixa de degustação
          </Heading>

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
                top=".05rem"
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
                top=".05rem"
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
                top=".05rem"
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
                top=".05rem"
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
                top=".05rem"
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
                color="Primary"
                respLink
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
