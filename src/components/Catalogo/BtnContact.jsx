import React from 'react'
import Button from '../Button/Button'


export default function CTA(props) {
  return (
    <Button
      bgLink={props.bgLink}
      value={props.value}
      link="https://wa.me/5511969456530?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho"
    />
  )
}
