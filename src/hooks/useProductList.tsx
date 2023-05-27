import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addAllOrder } from '../redux/orderSlice'

export default function useProductList() {
    const dispath = useDispatch()
    useEffect
        (() => {
            const productsLocales = window.localStorage.getItem('ordes')
            if (productsLocales) dispath(addAllOrder('all'))
        }, [])
    return { dispath }
}
