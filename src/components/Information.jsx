import React from 'react'
import { motion } from 'framer-motion'
import InfoList from './InfoList/InfoList'
import Title from './Catalogo/Title'
import Button from './Button/Button'
import { FlexContainer, PaddingContainer } from '../styles/Global.styled'
import { fadeInLeftVariant } from '../utils/Variants'

export default function Information() {
  return (
    <PaddingContainer top="4rem" bottom="4rem" left="2rem" right="2rem" responsive bgLight>
      <FlexContainer
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
        gap="1.5rem"
      >
        <Title titulo="Informações" /> 
        <FlexContainer direction="column" gap=".75rem">
          <InfoList info="Trabalhamos com contrato." />
          <InfoList info="Pedidos com antecedência (mediante disponibilidade de data)." />
          <InfoList info="Todos os doces serão entregues em formas de acetato transparente." />
          <InfoList info="Aceitamos pagamentos via transferência bancária, cartão de débito/crédito ou pix." />
          <InfoList info="A encomenda só será confirmada após o pagamento de 30% do valor do pedido." />
          <InfoList info="Os pedidos podem ser feitos através do whatsapp: (11) 96976-1802" />
          <InfoList info="Todos os doces são feitos de forma artesanal, com insumos de primeira qualidade. Não usamos conservantes." />
          <InfoList info="Quantidade mínima de cada sabor - 25 unidades" />
        </FlexContainer>
        <FlexContainer justify="center" top="2rem" respAction>
          <Button bgLink="Primary" value="Realizar orçamento" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento" />
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  )
}