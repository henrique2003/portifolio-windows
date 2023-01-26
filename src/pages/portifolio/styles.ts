import Image, { type StaticImageData } from 'next/image'
import styled from 'styled-components'

interface ContainerProps {
  bgUrl: StaticImageData
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  background: url(${({ bgUrl }) => bgUrl.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Portfolio = styled.button`
  max-width: 120px;
  height: 100px;
  background: none;
  border: none;
  border-radius: 2px;
  border: 1px solid transparent;
  
  &:hover {
    border: 1px solid #6faae8;
    background-color: rgba(205,228,252, 0.3);
  }
  
  &:focus {
    border: 1px solid #6faae8;
    background-color: rgba(205,228,252, 0.4);
  }
`

export const PortfolioText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-align: center;
  color: rgba(255,255,255,255.8);
  text-shadow: 3px 3px 4px rgba(0,0,0,1);
`

export const FolderImg = styled(Image)`
  width: 50px;
  height: 65px;
  margin: 0;
`
