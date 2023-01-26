import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  max-width: 700px;
  height: 450px;
  width: 100%;
  border: 1px solid white;
  background: white;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`

export const Close = styled.button`
  border: none;
  padding: 5px 10px;
  text-align: center;
  background: transparent;

  svg {
    font-size: 20px;
    color: rgba(0,0,0,0.6);
  }

  &:hover svg {
    color: rgba(0,0,0,0.8);
  }
`
