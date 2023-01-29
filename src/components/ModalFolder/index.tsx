import { useEffect, useState } from 'react'
import { HiFolder } from 'react-icons/hi2'
import { TfiClose } from 'react-icons/tfi'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { VscSearch } from 'react-icons/vsc'

import * as S from './styles'
import { CurrentProjectItem, FolderItem } from '@/components'
import { chrome, github, notes } from '@/assets'
import projectsMock from '@/mocks/projects'

interface Props {
  closeModal: () => void
}

interface ICurrentSelectedProject {
  name: string
  links: {
    github: string
    chrome?: string
  }
  description: string
}

const ModalFolder: React.FC<Props> = ({ closeModal }) => {
  const [currentSelectedProject, setCurrentSelectedProject] = useState<ICurrentSelectedProject>({
    name: '',
    links: {
      github: '',
      chrome: ''
    },
    description: ''
  })
  const [projects, setProjects] = useState<ICurrentSelectedProject[]>([])
  const [filterInput, setfilterInput] = useState('')

  function handleResetCurrentProject(): void {
    setCurrentSelectedProject({
      name: '',
      links: {
        github: '',
        chrome: ''
      },
      description: ''
    })
  }

  function handleClose(): void {
    handleResetCurrentProject()
    closeModal()
  }

  const filtedPojects = projects.filter(item => item.name.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase()))

  useEffect(() => {
    setProjects(projectsMock)
  }, [projectsMock])

  useEffect(() => {
    console.log(filterInput)
  }, [filterInput])

  return (
    <S.Container>
      <S.Header>
        <S.CurrentFolder>
          <HiFolder />
          <p>meus projetos</p>
        </S.CurrentFolder>
        <S.Close type='button' onClick={() => handleClose()}>
          <TfiClose />
        </S.Close>
      </S.Header>
      <S.SubHeader>
        <S.Navigate>
          <button
            type='button'
            disabled={currentSelectedProject.name.length === 0}
            onClick={() => handleResetCurrentProject()}
          >
            <BiLeftArrowAlt />
          </button>
          <button type='button' disabled>
            <BiRightArrowAlt />
          </button>
        </S.Navigate>
        <S.PathContainer>
          <button type='button' onClick={() => handleResetCurrentProject()}>
            <span>meus projetos</span>
            <MdKeyboardArrowRight />
          </button>
          {currentSelectedProject.name != null && (
            <button type='button'>
              <span>{currentSelectedProject.name}</span>
            </button>
          )}
        </S.PathContainer>
        <S.SearchContainer>
          <VscSearch />
          <S.FilterInput
            type='text'
            placeholder='Pesquisar'
            value={filterInput}
            onChange={e => setfilterInput(e.target.value)}
          />
        </S.SearchContainer>
      </S.SubHeader>
      <S.ProjectList>
        {(currentSelectedProject.name.length === 0)
          ? (
            filtedPojects.length > 0 || filterInput.length > 0
              ? filtedPojects.map(({ name, links, description }) => {
                return (
                  <FolderItem key={name} name={name} onClick={() => setCurrentSelectedProject({
                    name,
                    links,
                    description
                  })} />
                )
              })
              : (
                projects.map(({ name, links, description }) => {
                  return (
                    <FolderItem key={name} name={name} onClick={() => setCurrentSelectedProject({
                      name,
                      links,
                      description
                    })} />
                  )
                })
              )
          )
          : (
            <>
              {(currentSelectedProject.links.chrome != null) && (
                <CurrentProjectItem
                  img={{
                    src: chrome,
                    alt: 'icone do google chrome'
                  }}
                  text={currentSelectedProject.name}
                  link={currentSelectedProject.links.chrome}
                />
              )}
              <CurrentProjectItem
                img={{
                  src: github,
                  alt: 'icone do github'
                }}
                text='github.com'
                link={currentSelectedProject.links.github}
              />
              <CurrentProjectItem
                img={{
                  src: notes,
                  alt: 'icone do notas'
                }}
                text='descrição.txt'
              />
            </>
          )}
      </S.ProjectList>
    </S.Container>
  )
}

export default ModalFolder
