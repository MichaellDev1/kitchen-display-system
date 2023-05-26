import styled from 'styled-components'
import CardDisplay from '../../components/CardDisplay'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllOrder, deleteOrder } from '../../redux/orderSlice'

const ContentDisplay = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 50px;
  display: flex; 
  gap: 20px;
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
    label: 'terminados',
    state: 'finished',
  },
]

export default function LightspeedKitchenDisplay() {
  const products = useSelector((state) => state.heandleOrder)
  console.log(products)
  const dispath = useDispatch()

  useEffect(() => {
    const productsLocales = window.localStorage.getItem('ordes')
    if (productsLocales) dispath(addAllOrder('all'))
  }, [])

  const handleDelete = (id: string) => {
    dispath(deleteOrder(id))
  }

  const handleFilter = (state: string): void => {
    dispath(addAllOrder(state))
  }
  console.log(products)

  return <ContentDisplay>
    <div>
      Filtrado
      {buttonsFilter.map(({ label, state }) => <button key={label} onClick={() => handleFilter(state)}>{label}</button>)}
    </div>
    {products.ordes?.map(product => <li key={product.order}>
      <CardDisplay product={product} handleDelete={handleDelete} />
    </li>)}
  </ContentDisplay>
}
