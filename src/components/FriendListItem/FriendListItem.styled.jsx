import styled from "styled-components";

export const Item = styled.li`
display: flex;
align-items: center;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
margin-bottom: 10px;
min-height: 70px;
padding: 15px 20px;
background-color: #fff;
wight: 100%;
`

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};`

export const Avatar = styled.img`
  background-color: grey;
  border-radius: 5px;
  width: 125px;
  height: 125px;
  margin-right: 15px;`