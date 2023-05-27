import { useState } from 'react'
import { Order } from '../../types/type'

import useProductList from '../../hooks/useProductList'

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { addAllOrder, deleteOrder, updateProductOrder } from '../../redux/orderSlice'

import CardDisplay from '../../components/CardDisplay'
import ButtonBack from '../../components/ButtonBack'
import { ButtonFilter, ContentDisplay, ContentAllOrder } from './styled'

import { BsFilter } from 'react-icons/bs'
import MenuFilter from '../../components/MenuFilter'

interface ProductOrder {
  ordes: Order[]
}

interface StateProduct {
  heandleOrder: ProductOrder
}

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
        showFilter && <MenuFilter handleFilter={handleFilter} />

      }
      <div style={{ display: 'flex', gap: '4px' }}>
        <ButtonBack path='/' />
        <ButtonFilter onClick={handleShowMenuFilter}><BsFilter /><span>Filtros</span></ButtonFilter>
      </div>
    </div>

    <ContentAllOrder>
      {products.ordes?.map(product =>
        <li key={product.order}>
          <CardDisplay product={product} handleStateProduct={handleStateProduct} handleDelete={handleDelete} />
        </li>)}
    </ContentAllOrder>
  </ContentDisplay>
}
