import { windowsFolder } from '@/assets'
import * as S from './styles'

const FolderItem: React.FC = () => {
  return (
    <S.Container>
      <S.ProjectImg src={windowsFolder} alt='Projeto 1' />
      <S.Text>Indecision App</S.Text>
    </S.Container>
  )
}

export default FolderItem
