import { Order } from '../../types/type'
import { useDispatch } from 'react-redux'
import { cancelOrder, updateState } from '../../redux/orderSlice'
import React, { useCallback } from 'react'
import { CardElement, CardHeader } from './Styled'

interface Props {
    handleDelete: Function,
    product: Order
}

function CardDisplay({ product, handleDelete }: Props) {
    const dispath = useDispatch()

    const handleUpdate = useCallback((id: string): void => {
        dispath(updateState(id))
    }, [])

    const handleCancel = useCallback((id: string): void => {
        dispath(cancelOrder(id))
    }, [])

    return <CardElement>
        <CardHeader onClick={() => handleDelete(product.order)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                    background: '#B83434',
                    padding: '5px',
                    width: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '35px',
                    borderRadius: '10px'

                }}>{product.mesa}</div>
                <div style={{ textTransform: 'capitalize' }}>people 3</div>
            </div>
            <div>
                <span>#{product.order.slice(0, 10)}</span>
                <span>Served by hidden</span>
            </div>
        </CardHeader>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {product.products.map(produc => <li style={{ listStyle: 'none' }} key={produc?.name}>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', padding: '20px', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            {produc.cantidad}
                        </div>
                        <div>
                            <h4>{produc.name}</h4>
                        </div>
                    </div>
                    <div style={{ textTransform: 'capitalize' }}>
                        {product.state}
                    </div>
                </div>
            </li>)}
            {product.canceled ? <span style={{ color: 'red' }}>Cancelado!!!</span> : <span style={{ color: 'green' }}>{product.comment}</span>}
            <div><button onClick={() => handleCancel(product.order)}>Cancelar pedido</button>
                {!product.canceled && <button onClick={() => handleUpdate(product.order)}>{product.state === 'pending' ? 'Progress' : 'Finished'}</button>}
            </div>
        </ul>

    </CardElement>
}

export default React.memo(CardDisplay)
