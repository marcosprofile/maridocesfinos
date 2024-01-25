import React from 'react'
import { FlexContainer } from '../../styles/Global.styled'
import InfoList from '../InfoList/InfoList'
import ConsultButton from '../Product/ConsultButton'

export default function CaixaDeDegustacao() {
  return (
    <FlexContainer direction="column" gap="1.5rem">
      <InfoList info="Sabores dos doces sortidos de acordo com a produção da semana" />
      <InfoList info="Não possuímos serviços de entrega da caixa (retirar pessoalmente ou solicitar uber flash)" />
      <InfoList info="A caixa contém 15 sabores sortidos" />
      <InfoList info="Ofereçemos degustação presencial com agendamento" />
      <InfoList info="Pagamento via pix no momento da reserva" />
      <ConsultButton value="Solicitar degustação" link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20solicitar%20a%20degustação" />
    </FlexContainer>
  )
}
