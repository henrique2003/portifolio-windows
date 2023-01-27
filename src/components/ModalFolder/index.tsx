import { HiFolder } from 'react-icons/hi2'
import { TfiClose } from 'react-icons/tfi'

import * as S from './styles'

const ModalFolder: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.CurrentFolder>
          <HiFolder />
          <p>meus projetos</p>
        </S.CurrentFolder>
        <S.Close>
          <TfiClose />
        </S.Close>
      </S.Header>
    </S.Container>
  )
}

export default ModalFolder
