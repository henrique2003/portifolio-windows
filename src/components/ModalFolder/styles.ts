import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  max-width: 700px;
  height: 450px;
  width: 100%;
  background: white;

  @media(max-width: 750px) {
    max-width: 500px;

    margin: 0 30px;
  }

  @media(max-width: 500px) {
    width: auto;
  }
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

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 5px;
`

export const Navigate = styled.div`
  height: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; 
  flex: 1;

  button {
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      svg {
        color: rgba(0,0,0,0.4);
        
        &:hover {
          color: rgba(0,0,0,0.4);
        }
      }
    }

    svg {
      font-size: 17px;
      margin-top: 2px;
      color: rgba(0,0,0,0.6);
      
      &:hover {
        color: #6faae8;
      }
    }
  }

  @media(max-width: 500px) {
    display: none;
  }
`

export const PathContainer = styled.div`
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 10;
  border: 0.5px solid rgba(218,219,220,1);

  button {
    color: rgba(0,0,0,0.8);
    margin: 0;
    padding: 0;
    height: 25px;
    background: none;
    border: none;
    border: 1px solid transparent;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all .2s ease;

    span {
      padding: 0 5px;
      text-align: center;
    }

    &:hover {
      border: 1px solid rgba(111,170,232, 0.3);
      background-color: rgba(205,228,252, 0.2);
      transition: all .2s ease;

      svg {
        border-left: 0.5px solid rgba(111,170,232, 0.3);
      }
    }

    &:active {
      border: 1px solid rgba(111,170,232, 0.7);
      background-color: rgba(205,228,252, 0.4);
    }

    svg {
      color: rgba(0,0,0,0.6);
      font-size: 14px;
      margin-top: 1px;
      border-left: 0.5px solid transparent;
      height: 25px;
    }
  }


  @media(max-width: 400px) {
    display: none;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;
  border: 0.5px solid rgba(218,219,220,1);

  svg {
    position: absolute;
    left: 12px;
    color: rgba(0,0,0,0.6);
    font-size: 12px;
  }
`

export const FilterInput = styled.input`
  width: 100%;
  color: rgba(0,0,0,0.4);
  font-size: 12px;
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  padding-left: 35px;
  outline: none;
`

export const ProjectList = styled.div`
  flex: 1;
  min-height: 350px;
  padding: 10px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
