import React from 'react'
import { motion } from 'framer-motion'

// Styled
import { FlexContainer } from '../../styles/Global.styled'

// Components
import InfoList from '../InfoList/InfoList'
import Title from '../Product/Title'
import Button from '../Button/Button'
import ContainerItems from '../Product/ContainerItems'

// Utils
import { fadeInRightVariant } from '../../utils/Variants'


export default function CaixaDeDegustacao() {
  return (
    <ContainerItems motion={motion.div} slide={fadeInRightVariant}>
      <FlexContainer direction="column" gap="1.5rem">
        <Title titulo="Caixa de degustação" />
        <InfoList info="Sabores dos doces sortidos de acordo com a produção da semana" grey={true} />
        <InfoList info="Não possuímos serviços de entrega da caixa (retirar pessoalmente ou solicitar uber flash)" grey={true} />
        <InfoList info="A caixa contém 15 sabores sortidos" grey={true} />
        <InfoList info="Ofereçemos degustação presencial com agendamento" grey={true} />
        <InfoList info="Pagamento via pix no momento da reserva" grey={true} />
        <FlexContainer justify="center" top="2rem">
          <Button color="Primary" value="Solicitar degustação" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20solicitar%20a%20degustação" grey={true} />
        </FlexContainer>
      </FlexContainer>
    </ContainerItems>
  )
}
