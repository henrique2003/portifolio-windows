import React, { useState } from 'react'

import { windows, windowsFolder } from '@/assets'
import { ModalFolder } from '@/components'
import * as S from './styles'

const Portifolio: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <S.Container bgUrl={windows}>
      {openModal && <ModalFolder closeModal={() => setOpenModal(false)} />}
      <S.Portfolio type='button' onClick={() => setOpenModal(true)}>
        <S.FolderImg src={windowsFolder} alt="Imagem da pasta do windows" />
        <S.PortfolioText>meus projetos</S.PortfolioText>
      </S.Portfolio>
    </S.Container>
  )
}

export default Portifolio
