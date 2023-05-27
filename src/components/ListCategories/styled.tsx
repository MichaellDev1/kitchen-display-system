import { styled } from "styled-components"

const ListCategoryList = styled.li`
  font-size: 20px;
  font-weight: 400;
  color: var(--text-product);
  font-weight: 400;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none; 
`

const ContentCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  margin-top: 10px;
`

const Container = styled.div`
  height: 340px;
  overflow-y: scroll;
`

export { Container, ContentCategory, ListCategoryList }