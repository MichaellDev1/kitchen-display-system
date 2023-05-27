import { Order } from '../../types/type'
import { useDispatch } from 'react-redux'
import { cancelOrder, updateState } from '../../redux/orderSlice'
import React, { useCallback, useEffect, useState } from 'react'
import { CardElement, CardHeader, ContentMesas } from './Styled'
import { styled } from 'styled-components'

interface Props {
    handleDelete: Function,
    product: Order
    handleStateProduct: Function
}

const ButtonCancelOrder = styled.button`
flex-grow: 1;
cursor: pointer;
padding: 11px;
border: none;
background: #5d8fff;
color: #fff;
font-weight: 600;
font-size: 13px;
`

const ButtonCancel = styled.button <{ isCancel: boolean }> `
flex-grow: 1;
cursor: pointer;
padding: 10px;
color: ${props => props.isCancel ? '#726161' : '#fff'};
background: ${props => props.isCancel ? '#e1e1e1' : '#fb7d7d'};
border: none;
font-weight: 600;
`

function CardDisplay({ product, handleDelete, handleStateProduct }: Props) {
    const dispath = useDispatch()
    const [time, setTime] = useState(1500);

    const handleUpdate = useCallback((id: string): void => {
        dispath(updateState(id))
    }, [])

    const handleCancel = useCallback((id: string): void => {
        dispath(cancelOrder(id))
    }, [])


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return <CardElement>
        <CardHeader time={time} onClick={() => handleDelete(product.order)} isCancel={product.canceled}>
            <ContentMesas time={time} isCancel={product.canceled}>{product.mesa}</ContentMesas>
            <div>
                <span style={{ textTransform: 'uppercase' }}>#{product.order.slice(0, 10)}</span>
                <span>Served by hidden</span>
            </div>
        </CardHeader>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px', minHeight: '250px', maxHeight: '250px', overflowY: 'scroll', marginTop: '10px' }}>

            {product.products.map((productOrder, inx) => <li style={{ listStyle: 'none' }} onClick={() => handleStateProduct(productOrder.terminate, inx, product.order)} key={productOrder?.name}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-between', textDecoration: productOrder.terminate ? 'line-through' : 'none' }}>
                        <div>
                            <h4 style={{ color: 'var(--text-color)', fontSize: '18px', fontWeight: '500' }}>{productOrder.name}</h4>
                        </div>
                        <div style={{ fontSize: '17px', fontWeight: '500', color: '#70e570' }}>
                            x
                            {productOrder.cantidad}
                        </div>
                    </div>
                </div>
            </li>)}
        </ul>


        {/* <div>
            <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
        </div> */}

        <div style={{ padding: '20px' }}>
            <div style={{ minHeight: '25px' }}>
                {product.canceled ? <span style={{ color: '#ff6464', fontSize: '15px', fontWeight: '500' }}>Cancelado!!!</span> : <span style={{ color: 'green' }}>{product.comment}</span>}
            </div>

            <div style={{ width: '100%', display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <ButtonCancel isCancel={product.canceled} style={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => handleCancel(product.order)}>{product.canceled ? 'Reactivar pedido' : 'Cancelar pedido'}</ButtonCancel>

                {!product.canceled && <ButtonCancelOrder style={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => handleUpdate(product.order)}>{product.state}</ButtonCancelOrder>}
            </div>
        </div>

    </CardElement>
}

export default React.memo(CardDisplay)
