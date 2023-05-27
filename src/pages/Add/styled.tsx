import { styled } from "styled-components"

const ContentAdd = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  @media (max-width: 800px) {
    padding: 20px 20px;
  }
  flex-direction: column; 

  .content-btn-back {
    margin-bottom: 10px;
    width: 100%;
  }
`
const Title = styled.h4`
  color: var(--text-color);
  font-size: 24px;
`

const ButtonDeselect = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--text-color);
`

const ContentTwoSection = styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  background: #fff;
  @media (max-width: 800px){
    flex-direction: column;
    align-items: flex-start; 
  }
  padding: 20px;
`

export { ButtonDeselect, ContentAdd, Title, ContentTwoSection }
