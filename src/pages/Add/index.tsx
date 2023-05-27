import { useState } from 'react'
import styled from 'styled-components'
import ListCategories from '../../components/ListCategories'
import ListProducts from '../../components/ListProducts'
import { ProductInterface } from '../../types/type'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../redux/orderSlice'
import ButtonBack from '../../components/ButtonBack'

import { HiArrowNarrowLeft } from 'react-icons/hi'

const ContentAdd = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  flex-direction: column;
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

export default function Add() {
  //Estados
  const [categorySelected, setSelected] = useState<string | null>(null)
  const [productsSelected, setProducts] = useState<Array<ProductInterface>>([])
  const [comment, setComment] = useState<string>('')

  const dispath = useDispatch()

  //Selecciona una categoria para mostrar sus productos
  const handleSelected = (selected: string) =>
    setSelected(selected)

  //Funcion acumuladora de los productos, en caso de repetirce se sumara la cantidad como el precio en total
  const handleProductSelected = (produc: ProductInterface): void => {
    const verifyRepeat = productsSelected.findIndex(prod => prod?.name == produc.name)
    if (verifyRepeat !== -1) {
      productsSelected[verifyRepeat].cantidad += 1
      productsSelected[verifyRepeat].price += productsSelected[verifyRepeat].price
      setProducts([...productsSelected])
    } else {
      setProducts(lastState => [...lastState, { ...produc, cantidad: 1, terminate: false }])
    }
  }

  //Fucnion que crea y envia una nueva orden al Display del Cocinero
  const handleSendOrder = () => {
    if (productsSelected.length > 0) {
      dispath(addOrder({ products: productsSelected, comment }))
      setProducts([])
      setSelected(null)
      setComment('')
    } else {
      alert('Debes seleccionar las ordenes')
    }
  }

  //Cancelamiento de la orden, eliminando los productos
  const handleCancelOrder = () => {
    setProducts([])
    setSelected(null)
  }

  //Obtiete el valor del comentario
  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value)

  return (
    <ContentAdd>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '10px' }}>
          <ButtonBack path='/' />
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '20px' }}>

          <div style={{ flexGrow: '1', borderRight: '1px solid rgb(231 231 231)', padding: '20px' }}>
            {categorySelected
              ? <div>
                <div style={{ minHeight: '25px' }}>
                  <ButtonDeselect onClick={() => setSelected(null)}><HiArrowNarrowLeft /></ButtonDeselect>
                </div>
                <Title>Productos:</Title>
                <ListProducts
                  categorySelected={categorySelected} handleProductSelected={handleProductSelected} /></div>
              : <div>
                <div style={{ minHeight: '25px' }}>
                </div>
                <Title>Categorias:</Title>
                <ListCategories handleCategorySelected={handleSelected} /></div>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>

            <ul style={{ minHeight: '300px', maxHeight: '300px', overflowY: 'scroll', paddingTop: '15px' }}>
              {productsSelected?.map(res =>
                <li key={res.name}
                  style={{ display: 'flex', gap: '5px' }}>
                  <span>X{res?.cantidad}</span>
                  <span>{res.name}</span></li>)}
            </ul>

            <div>
              <span>Total:</span>
              <span>${productsSelected?.reduce((a, e) => a + e.price, 0)}</span>

            </div>

            <div>
              <div>
                <input type="text" placeholder='Comentario...' value={comment} onChange={handleChangeComment} />
              </div>
              <div>
                <button onClick={() => handleCancelOrder()}>Cancelar</button>
                <button onClick={() => handleSendOrder()}>Enviar</button>
              </div>
            </div>
          </div>

        </div>
      </div>


    </ContentAdd>
  )
}
