import styled from 'styled-components'

const CardElement = styled.div`
  width: 300px;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 10px 20px rgba(0 0 0 / 3%);
  justify-content: space-between;
`

const CardHeader = styled.div<{ time: number, iscancel: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  background: ${props => props.iscancel == 'true' ? '#d7d7d7' : props.time > 1400 ? '#72f388' : props.time < 600 ? '#ED5154' : '#f3e372'};
  padding: 0 15px;
  div:first-child {
      display: flex;
      gap: 10px
  }
  div:last-child {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      text-align: end;
  }
`

const ContentMesas = styled.div<{ time: number, iscancel: string }>`
  background: ${props => props.iscancel == 'true' ? "#b6b9b6" : props.time > 1400 ? '#5dc56f' : props.time < 600 ? '#a54345' : '#d1c35f'};
  padding: 5px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 2px;
`

const ButtonCancelOrder = styled.button`
  flex-grow: 1;
  cursor: pointer;
  padding: 11px;
  border: none;
  background: #7daffb;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  &:hover {
    transition: background-color .2s;
    background: #a8cbff;
  }
`

const ButtonCancel = styled.button <{ iscancel: string }> `
  flex-grow: 1;
  cursor: pointer;
  padding: 10px;
  color: ${props => props.iscancel == 'true' ? '#726161' : '#fff'};
  background: ${props => props.iscancel == 'true' ? '#e1e1e1' : '#fb7d7d'};
  border: none;
  font-weight: 600;
  &:hover {
    transition: background-color .2s;
    background: #ffaeae;
  }
`

const ContentButtonsCard = styled.div`
  width: 100%;
  display: flex;
  justifyItems: center;
  justify-content: center;
  gap: 20px;
`

const ContentButtons = styled.div`
  padding: 20px;
  .content-comment {
    min-height: 25px;
  }
`

const CommentOrCancel = styled.span`
  color: #ff6464; 
  text-transform: capitalize;
  font-size: 15px; 
  font-weight: 500;
`

const ContentProductOrder = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: 250px;
  max-height: 250px;
  overflow-y: scroll;
  margin-top: 10px;
`

const CardProduct = styled.div`
  display: flex;
  width: 100%; 
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
`

const TextProductThrough = styled.div<{ productorder: string }>`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  text-decoration: ${props => props.productorder == 'true' ? 'line-through' : 'none'};
  .name-product {
   color: var(--text-color);
   font-size: 18px;
   font-weight: 500;
  }
  .cantidad-product { 
   font-size: 17px; 
   font-weight: 500; 
   color: #70e570; }
`

const ListProduct = styled.li`
  list-style: none;
`

const ContentIdTime = styled.div`
font-size: 15px;
  .id-order {
    text-transform: uppercase;
  }

  .time{
    
  }
`

export { CardElement, CardHeader, ContentMesas, ButtonCancel, ButtonCancelOrder, CardProduct, CommentOrCancel, ContentButtons, TextProductThrough, ContentButtonsCard, ContentProductOrder, ListProduct, ContentIdTime }