import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  max-width: 700px;
  height: 450px;
  width: 100%;
  background: white;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  border-bottom: 0.5px solid rgba(218,219,220,1);
`

export const CurrentFolder = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  display: flex;
  height: 15px;

  svg {
    font-size: 15px;
    padding-right: 7px;
    color: #ffe792;
  }

  p {
    margin: 0;
    padding: 0;
    border-left: 1px solid rgba(0,0,0,0.3);
    padding-left: 7px;
    font-size: 13px;
    color: rgba(0,0,0,0.4);
  }
`

export const Close = styled.button`
  border: none;
  text-align: center;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  svg {
    font-size: 12px;
    color: rgba(0,0,0,0.4);
  }

  &:hover {
    background-color: red;
    color: rgba(0,0,0,0.8);

    svg {
      color: white;
    }
  }
`
