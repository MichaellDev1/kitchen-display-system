import styled from 'styled-components'
import CardDisplay from '../../components/CardDisplay'
import { useSelector } from 'react-redux'
import { addAllOrder, deleteOrder, updateProductOrder } from '../../redux/orderSlice'
import { useState } from 'react'
import { Order } from '../../types/type'
import useProductList from '../../hooks/useProductList'
import { BsFilter } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import ButtonBack from '../../components/ButtonBack'

const ContentDisplay = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 50px;
  display: flex; 
  gap: 20px;
  flex-direction: column;
  flex-wrap: wrap;
`

const buttonsFilter = [
  {
    label: 'Todos',
    state: 'all',
  },
  {
    label: 'pendinetes',
    state: 'pending',
  }, {
    label: 'En proceso',
    state: 'progress',
  }, {
    label: 'Terminados',
    state: 'finished',
  },
]

interface ProductOrder {
  ordes: Order[]
}

interface StateProduct {
  heandleOrder: ProductOrder
}


const ButtonFilter = styled.button`
  background: #fff;
  border: none;
   font-size: 23px;
   line-height: 1;
   padding: 5px 10px;
   border-radius: 10px;
   cursor: pointer;
   display: flex;
   color: var(--text-color);
   gap: 5px;
   align-items: center;
   span {
    font-size: 16px;
    font-weight: 400;
   }
`


const ContentFilters = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   left: 190px;
   box-shadow: 1px 10px 20px rgba(0 0 0 / 9%);
   border-radius: 10px;
   background: #fff;
   padding: 20px 15px;
   gap: 20px;
   min-width: 240px;
   button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 16px;
    background: #f1f1f1;
    padding: 8px 0; 
    border-radius: 10px;
    font-weight: 400;
    color: var(--text-color);
   }
`

export default function LightspeedKitchenDisplay() {
  const navigate = useNavigate()
  const [showFilter, setShowFilter] = useState<boolean>(false)
  const products: ProductOrder = useSelector((state: StateProduct) => state.heandleOrder)

  //Custom hooks que se encarga de que cada ves que la pagina se recargue dispare la accion de traer los productos :)
  const { dispath } = useProductList()

  //Elimina la orden presionando la parte superior de la misma
  const handleDelete = (id: string) =>
    dispath(deleteOrder(id))

  //A la hora de seleccionar una opcion de filtrado este va a mandar un dispath al store
  const handleFilter = (state: string) =>
    dispath(addAllOrder(state))

  const handleShowMenuFilter = () =>
    setShowFilter(!showFilter)

  //Obtenemos el estado, el index y el id de la orden para diferenciar y actualizar el estado del producto.
  const handleStateProduct = (state: boolean, inx: number, order: string) =>
    dispath(updateProductOrder({ state, inx, order }))

  return <ContentDisplay>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'start', position: 'relative' }}>
      {
        showFilter && <ContentFilters>
          {buttonsFilter.map(({ label, state }) => <button key={label} onClick={() => handleFilter(state)}>{label}</button>)}
        </ContentFilters>
      }
      <div style={{ display: 'flex', gap: '4px' }}>
        <ButtonBack path='/' />
        <ButtonFilter><FiPlus /></ButtonFilter>
        <ButtonFilter onClick={handleShowMenuFilter}><BsFilter /><span>Filtros</span></ButtonFilter>
      </div>
    </div>

    <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'start' }}>

      {products.ordes?.map(product =>
        <li key={product.order} style={{ listStyle: 'none' }}>
          <CardDisplay product={product} handleStateProduct={handleStateProduct} handleDelete={handleDelete} />
        </li>)}

    </ul>
  </ContentDisplay>
}
