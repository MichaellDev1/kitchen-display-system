import { Order } from '../../types/type'

import React, { useCallback, useEffect, useState } from 'react'

import { cancelOrder, updateState } from '../../redux/orderSlice'
import { useDispatch } from 'react-redux'

import { CardElement, CardHeader, ContentMesas, ButtonCancel, ButtonCancelOrder, CardProduct, CommentOrCancel, ContentButtons, ContentButtonsCard, ContentProductOrder, ListProduct, TextProductThrough } from './Styled'

interface Props {
  handleDelete: Function,
  product: Order
  handleStateProduct: Function
}

function CardDisplay({ product, handleDelete, handleStateProduct }: Props) {
  const [time, setTime] = useState(1500);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dispath = useDispatch()

  //Actualiza el estado de la orden
  const handleUpdate = useCallback((id: string): void => {
    dispath(updateState(id))
  }, [])

  //Cancela la orden
  const handleCancel = useCallback((id: string): void => {
    dispath(cancelOrder(id))
  }, [])

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return <CardElement>
    <CardHeader time={time} onClick={() => handleDelete(product.order)} isCancel={product.canceled}>
      <ContentMesas time={time} isCancel={product.canceled}>{product.mesa}</ContentMesas>
      <div>
        <span style={{ textTransform: 'uppercase' }}>#{product.order.slice(0, 13)}</span>
        <span>Served by hidden</span>
      </div>
    </CardHeader>

    <ContentProductOrder>

      {product.products.map((productOrder, inx) => (
        <ListProduct onClick={() => handleStateProduct(productOrder.terminate, inx, product.order)} key={productOrder?.name}>

          <CardProduct>
            <TextProductThrough productOrder={productOrder.terminate}>
              <div>
                <h4 className='name-product'>{productOrder.name}</h4>
              </div>
              <div className='cantidad-product'>
                x{productOrder.cantidad}
              </div>
            </TextProductThrough>
          </CardProduct>

        </ListProduct>
      ))
      }

    </ContentProductOrder>
    <ContentButtons>

      <div className='content-comment'>
        {product.canceled
          ? <CommentOrCancel>Cancelado!!!</CommentOrCancel>
          : <CommentOrCancel>{product.comment}</CommentOrCancel>}
      </div>

      <ContentButtonsCard>

        <ButtonCancel isCancel={product.canceled} onClick={() => handleCancel(product.order)}>
          {product.canceled ? 'Reactivar pedido' : 'Cancelar pedido'}
        </ButtonCancel>

        {!product.canceled &&
          <ButtonCancelOrder style={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => handleUpdate(product.order)}>
            {product.state == 'progress' ? 'En proceso' : product.state === 'pending' ? 'Comenzar' : 'Finalizado'}
          </ButtonCancelOrder>
        }

      </ContentButtonsCard>
    </ContentButtons>

  </CardElement>
}

export default React.memo(CardDisplay)

//Implementacion del time:
{/* <div>
            <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
</div> */}