import { styled } from "styled-components"

const ListProductElement = styled.li`
font-size: 18px;
font-weight: 400;
color: var(--text-product);
font-weight: 400;
list-style: none;
cursor: pointer;
text-transform: capitalize;
user-select: none; 
`
const ContentProduct = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 10px;
`

const Container = styled.div`
  height: 340px;
  overflow-y: scroll;
`
export { ContentProduct, ListProductElement, Container }