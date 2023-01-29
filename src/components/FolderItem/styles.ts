import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.button`
  max-width: 120px;
  width: 100%;
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

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
`

export const ProjectImg = styled(Image)`
  width: 50px;
  height: 65px;
  margin: 0;
`
