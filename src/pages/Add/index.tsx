import { useState } from 'react'
import { ProductInterface } from '../../types/type'
import { useDispatch } from 'react-redux'
import { addOrder } from '../../redux/orderSlice'

import ButtonBack from '../../components/ButtonBack'

import { ContentAdd, ContentTwoSection } from './styled'
import MenuViewProductAdd from '../../components/MenuViewProductAdd'
import SectionCategoryProducts from '../../components/SectionCategoryProduct'


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

  //Funcion que crea y envia una nueva orden al Display del Cocinero
  const handleSendOrder = (): void => {
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
  const handleCancelOrder = (): void => {
    setProducts([])
    setSelected(null)
  }

  //Obtiete el valor del comentario
  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value)

  return (
    <ContentAdd>
      <div className='content-btn-back'>
        <ButtonBack path='/' />
      </div>
      <ContentTwoSection>

        <SectionCategoryProducts 
          categorySelected={categorySelected} 
          handleProductSelected={handleProductSelected} 
          handleSelected={handleSelected} 
          setSelected={setSelected} />

        <MenuViewProductAdd 
          comment={comment} 
          handleCancelOrder={handleCancelOrder} 
          handleChangeComment={handleChangeComment} 
          handleSendOrder={handleSendOrder} 
          productsSelected={productsSelected} />

      </ContentTwoSection>
    </ContentAdd>
  )
}


