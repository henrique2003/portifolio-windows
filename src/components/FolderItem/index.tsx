import { windowsFolder } from '@/assets'
import * as S from './styles'

interface Props {
  name: string
  onClick: () => void
}

const FolderItem: React.FC<Props> = ({ onClick, name }) => {
  return (
    <S.Container onClick={() => onClick()}>
      <S.ProjectImg
        src={windowsFolder}
        alt={`Projeto ${name}`}
        loading='eager'
        priority
      />
      <S.Text>{name}</S.Text>
    </S.Container>
  )
}

export default FolderItem
