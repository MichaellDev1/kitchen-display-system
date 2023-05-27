import { styled } from "styled-components"

const ContentViewProduct = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
 flex-grow: 1;
 @media (max-width: 700px){
  padding: 0px;
  width: 100%;
 }
 .content-product {
  height: 300px; 
  overflow-y: scroll;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 4px;
 }
`
const ContentTotal = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
  font-size: 19px;
  color: var(--text-color);
  font-weight: 500;
`
const ContentCommentButton = styled.div`
 .btns-content {
  display: flex;
  gap: 3px;
 }
 .content-input {
  margin-bottom: 10px;
 }
`

const BtnCancel = styled.button`
  flex-grow: 1;
  background: #7daffb;
  cursor: pointer;
  padding: 11px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  border-radius: 5px;
  &:hover {
    background: #a8cbff;
    transition: background-color .2s;
    color: #fff;
  }
`

const BtnSend = styled.button`
  flex-grow: 1;
  cursor: pointer;
  padding: 11px;
  border: none;
  color: #7daffb;
  font-weight: 600;
  border: 1px solid #7daffb;
  border-radius: 5px;
  background: #fff;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    background: #7daffb;
    transition: background-color .2s;
    color: #fff;
  }
`

const ListAddProduct = styled.li`
  font-weight: 400;
  display: flex;
  gap: 5px;
  color: #202020;
  font-size: 16px;
  color: var(--text-product);
  list-style: none;
`
const InputCommnet = styled.input`
  font-size: 15px;
  padding: 10px 10px;
  width: 100%;
  border-radius: 3px;
  border: none;
  color: #707070;
  background: #ebebeb;
  ::placeholder {
    color: red;
}
`

export { ContentCommentButton, ContentTotal, ContentViewProduct, BtnCancel, BtnSend, ListAddProduct, InputCommnet }