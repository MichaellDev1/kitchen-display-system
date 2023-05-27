import { styled } from "styled-components"

const ButtonFilter = styled.button`
  background: #fff;
  border: none;
   font-size: 23px;
   line-height: 1;
   padding: 5px 10px;
   cursor: pointer;
   display: flex;
   color: var(--text-color);
   gap: 5px;
   align-items: center;
   span {
    font-size: 16px;
    font-weight: 400;
   }
   &:hover {
    background: #e9e9e9;
  }
`


const ContentDisplay = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 50px;
  display: flex; 
  gap: 20px;
  @media (max-width: 800px) {
    padding: 20px 20px;
  }
  flex-direction: column;
  flex-wrap: wrap;
  .top-buttons { 
    width: 100%; 
    display: flex; 
    justify-content: start;
    position: relative;
  }
`

const ContentAllOrder = styled.ul`
    display: flex; 
    gap: 10px; 
    flex-wrap: wrap; 
    justify-content: start;
    li { list-style: none; }
`

export { ButtonFilter, ContentDisplay, ContentAllOrder }