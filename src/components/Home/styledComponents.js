import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  height: 100vh;
  background-color: #f2f2f2;
  width: 100%;
  padding: 10px;
`

export const Heading = styled.h1`
  color: #161716;
  font-family: Roboto;
  font-size: 25px;
  margin: 5px;
`

export const Description = styled.p`
  color: #848785;
  margin: 5px;
  margin-bottom: 15px;
`
export const CreateAccountButton = styled.button`
  border-style: none;
  background-color: #3d43e3;
  color: white;
  padding: 15px;
  border-radius: 7px;
  font-weight: bold;
  width: 100%;
  margin: 5px;
  font-size: 16px;
`

export const AlreadyRegisteredButton = styled.button`
  border-style: none;
  background-color: #ced7db;
  color: #161716;
  padding: 15px;
  border-radius: 7px;
  font-weight: bold;
  width: 100%;
  margin: 5px;
  font-size: 16px;
`
