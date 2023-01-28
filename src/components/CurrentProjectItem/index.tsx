import { type StaticImageData } from 'next/image'
import * as S from './styles'

interface Props {
  img: {
    src: StaticImageData
    alt: string
  }
  text: string
  link?: string
}

const CurrentProjectItem: React.FC<Props> = ({ img, text, link }) => {
  return (
    <S.Container href={link} target='_blank'>
      <S.Icon src={img.src} alt={img.alt} />
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}

export default CurrentProjectItem
