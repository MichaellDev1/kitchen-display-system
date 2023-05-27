import { createSlice } from "@reduxjs/toolkit";
import { Initial, Order } from "../types/type";
import { v4 as uuidv4 } from 'uuid'

const initialState: Initial = {
  ordes: []
}

//Estas 3 funciones en donde accedemos al localStorage tienen la funcionalidad de no repetir codigo
//1
const getLocalFunctionRepeat = (key: string) => {
  return JSON.parse(window.localStorage.getItem('ordes')) || []
}
//2
const setLocalFunctionRepeat = (key: string, update: Order[]): void => {
  window.localStorage.setItem('ordes', JSON.stringify(update))
}

//3
//Funcionalidad que permite encomntrar el elemento o orden que querramos actualizar/eliminar
const deleteUpdateRepeat = (actions: any) => {
  const update = getLocalFunctionRepeat('ordes')
  const findIndex = update.findIndex((product: Order) => product?.order == actions.payload)
  const updateElement = update[findIndex]
  return { update, findIndex, updateElement }
}

const orderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addAllOrder: (state, action) => {
      if (action.payload == 'all') {
        state.ordes = getLocalFunctionRepeat('ordes')
      }

      if (action.payload !== 'all') {
        state.ordes = getLocalFunctionRepeat('ordes').filter((product: Order) => product.state == action.payload)
      }

    },
    addOrder: (state, action) => {
      const ordes = getLocalFunctionRepeat('ordes')

      //Libreria que genera ID unicos para diferenciar y manejar estados de la orden
      const uidUnique = uuidv4().split('-').join('')

      const productAdd = {
        order: uidUnique,
        products: action.payload.products,
        mesa: Math.round(Math.random() * 100),
        state: 'pending',
        completed: false,
        comment: action.payload.comment,
        canceled: false,
        waiter: 'Alberto'
      }

      //Verifica si existe en el localStorage para la acumulacion de las ordenes
      if (ordes)
        setLocalFunctionRepeat('ordes', [...ordes, productAdd])
      else
        setLocalFunctionRepeat('ordes', [productAdd])

      state.ordes = [...ordes, productAdd]

    },

    deleteOrder: (state, action) => {
      //Filtrado para eliminar el producto deseado.
      const orderDelete: any =
        state.ordes.filter(produc => produc?.order !== action.payload)

      setLocalFunctionRepeat('ordes', orderDelete)
      state.ordes = orderDelete
    },

    updateState: (state, actions) => {
      const { findIndex, update, updateElement } = deleteUpdateRepeat(actions)

      if (updateElement.state !== 'finished') {
        updateElement.state = updateElement.state === 'pending' ? 'progress' : 'finished'
        update[findIndex] = updateElement

        setLocalFunctionRepeat('ordes', update)
        state.ordes = update
      }
    },

    cancelOrder: (state, actions) => {
      const { findIndex, update, updateElement } = deleteUpdateRepeat(actions)

      updateElement.canceled = updateElement.canceled ? false : true
      update[findIndex] = updateElement
      setLocalFunctionRepeat('ordes', update)
      state.ordes = update
    },
    updateProductOrder: (state, actions) => {
      const { findIndex, update, updateElement } = deleteUpdateRepeat({ payload: actions.payload.order })

      update[findIndex].products[actions.payload.inx].terminate = !actions.payload.state
      setLocalFunctionRepeat('ordes', update)
      state.ordes = update
    }
  },

})

export const { addOrder, deleteOrder, addAllOrder, updateState, cancelOrder, updateProductOrder } = orderSlice.actions;
export default orderSlice.reducer
