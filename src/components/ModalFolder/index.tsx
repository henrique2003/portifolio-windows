import { HiFolder } from 'react-icons/hi2'
import { TfiClose } from 'react-icons/tfi'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscSearch } from 'react-icons/vsc'

import * as S from './styles'

interface Props {
  closeModal: () => void
}

const ModalFolder: React.FC<Props> = ({ closeModal }) => {
  return (
    <S.Container>
      <S.Header>
        <S.CurrentFolder>
          <HiFolder />
          <p>meus projetos</p>
        </S.CurrentFolder>
        <S.Close type='button' onClick={() => closeModal()}>
          <TfiClose />
        </S.Close>
      </S.Header>
      <S.SubHeader>
        <S.Navigate>
          <button type='button' disabled>
            <BiLeftArrowAlt />
          </button>
          <button type='button'>
            <BiRightArrowAlt />
          </button>
        </S.Navigate>
        <S.PathContainer>
          <button type='button'>
            <span>meus projetos</span>
            <MdKeyboardArrowRight />
          </button>
          <button type='button'>
            <span>Get fruits</span>
          </button>
        </S.PathContainer>
        <S.SearchContainer>
          <VscSearch />
          <S.FilterInput type='text' placeholder='Pesquisar' />
        </S.SearchContainer>
      </S.SubHeader>
    </S.Container>
  )
}

export default ModalFolder
