import { styled } from "styled-components"

const ContentSectionCategory = styled.div`
  flex-grow: 2; 
  @media (min-width: 800px){
  border-right: 1px solid rgb(231 231 231);
  }
  display: flex;
  align-items: flex-start;
  padding: 20px;
  @media (max-width: 700px){
    padding: 0px;
    width: 100%;
  }
`

export { ContentSectionCategory }