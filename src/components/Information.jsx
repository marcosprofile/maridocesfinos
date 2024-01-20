import React from 'react'
import { motion } from 'framer-motion'

import {
  FlexContainer,
  Heading,
  Icon,
  PaddingContainer,
  RouterLink,
} from '../styles/Global.styled'

import { BsFillRecordFill } from 'react-icons/bs'

import { fadeInLeftVariant } from '../utils/Variants'

const Information = () => {
  return (
    <PaddingContainer
      top="4rem"
      bottom="4rem"
      left="2rem"
      right="2rem"
      responsive
    >
      <FlexContainer
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap="1.5rem"
      >
        <Heading
          as="h2"
          size="h2"
          grey
        >
          Informações
        </Heading>
        
        <FlexContainer direction="column">
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Trabalhamos com contrato.
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Pedidos com antecedência (mediante disponibilidade de data).
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Todos os doces serão entregues em formas de acetato transparente.
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Pagamentos via transferência bancária em pix.
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              A encomenda só será confirmada após o pagamento de 30% do valor do pedido.
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Os pedidos podem ser feitos através do whatsapp: (11) 96976-1802
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Todos os doces são feitos de forma artesanal, com insumos de primeira qualidade. Não usamos conservantes.
            </Heading>
          </FlexContainer>
          <FlexContainer
            gap=".5rem"
            marginBottom="1rem"
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
              Quantidade mínima de cada sabor - 25 unidades
            </Heading>
          </FlexContainer>
        </FlexContainer>
        
        <FlexContainer
          top="2.5rem"
          justify="center"
          respAction
        >
          <RouterLink
            top="1.5rem"
            bottom="1.5rem"
            left="2.5rem"
            right="2.5rem"
            align="center"
            gap=".5rem"
            radius=".5rem"
            justify="center"
            href="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento"
            target="_blank"
            color="Primary"
            respLink
          >
            Realizar orçamento
          </RouterLink>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Information