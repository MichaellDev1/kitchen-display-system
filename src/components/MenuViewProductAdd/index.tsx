import { ProductInterface } from '../../types/type'
import { ContentCommentButton, ContentTotal, ContentViewProduct, BtnCancel, BtnSend, ListAddProduct, InputCommnet } from './styled'

interface Props {
  productsSelected: ProductInterface[]
  handleChangeComment: any
  handleCancelOrder: Function
  handleSendOrder: Function
  comment: string
}

export default function MenuViewProductAdd({ productsSelected, handleChangeComment, handleCancelOrder, handleSendOrder, comment }: Props) {
  return <ContentViewProduct>
    <ul className='content-product'>

      {productsSelected?.map((res: ProductInterface) =>
        <ListAddProduct key={res.name}>
          <span>X{res?.cantidad}</span>
          <span>{res.name}</span>
        </ListAddProduct>)}

    </ul>

    <ContentTotal>
      <span>Total:</span>
      <span>${productsSelected?.reduce((a, e) => a + e.price, 0)}</span>
    </ContentTotal>

    <ContentCommentButton>

      <div className='content-input'>
        <InputCommnet type="text" placeholder='Comentario...' value={comment} onChange={handleChangeComment} />
      </div>

      <div className='btns-content'>
        <BtnCancel onClick={() => handleCancelOrder()}>Cancelar</BtnCancel>
        <BtnSend onClick={() => handleSendOrder()}>Enviar</BtnSend>
      </div>

    </ContentCommentButton>

  </ContentViewProduct>
}
