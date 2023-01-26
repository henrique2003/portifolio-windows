import React from 'react'

import { windows, windowsFolder } from '@/assets'

import * as S from './styles'
import { ModalFolder } from '@/components'

const Portifolio: React.FC = () => {
  return (
    <S.Container bgUrl={windows}>
      <ModalFolder />
      <S.Portfolio type='button'>
        <S.FolderImg src={windowsFolder} alt="Imagem da pasta do windows" />
        <S.PortfolioText>Meus projetos</S.PortfolioText>
      </S.Portfolio>
    </S.Container>
  )
}

export default Portifolio
