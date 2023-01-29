import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.a`
  max-width: 120px;
  width: 100%;
  height: 100px;
  background: none;
  border: none;
  border-radius: 2px;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  text-decoration: none;

  &:hover {
    border: 1px solid #6faae8;
    background-color: rgba(205,228,252, 0.3);
    cursor: auto;
  }

  &:focus {
    border: 1px solid #6faae8;
    background-color: rgba(205,228,252, 0.4);
  }
`

export const Icon = styled(Image)`
  width: 65px;
  height: 65px;
  margin-top: 1px;
  text-align: center;
`

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
  color: rgba(0,0,0,0.7);
  margin: 0;
  padding: 0;
  margin-top: 10px;
  width: 100%;
  word-break: break-all;
`
