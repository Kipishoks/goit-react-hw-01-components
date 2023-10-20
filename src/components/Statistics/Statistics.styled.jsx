import styled from "styled-components";

export const Stat = styled.section`
  text-align: center;
  background-color: #fff;
  margin-bottom: 30px;
  padding: 15px;`

export const Title = styled.h2`
  font-weight: 500;
  `

export const StatList = styled.ul`
  display: flex;
  align-items: center;
`
export const Item = styled.li`
 display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: yellow;
  border: 1px solid black;
  flex-basis: calc(100% / 5);`

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  `

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
`