import React, { useEffect, useState } from 'react'
import { ProductInterface } from '../../types/type'

const listProducts = [
    {
        name: 'Cafe',
        category: 'desayunos',
        price: 3
    }, {
        name: 'hamburgeza',
        category: 'entradas',
        price: 10
    }, {
        name: 'Caro',
        category: 'platos',
        price: 3
    }, {
        name: 'Gaseosa',
        category: 'bebidas',
        price: 7
    },
]

interface Props {
    setSelected: React.Dispatch<React.SetStateAction<string | null>>
    categorySelected: string
    handleProductSelected: Function
}

export default function ListProducts({ categorySelected, setSelected, handleProductSelected }: Props) {
    const [products, setProducts] = useState<Array<ProductInterface>>()

    useEffect(() => {
        const filterProduct = listProducts.filter(product => product.category == categorySelected)
        setProducts(filterProduct)
    }, [categorySelected])

    return <div>
        <button onClick={() => setSelected(null)}>Regresar</button>
        {products?.map(res => <li key={res.name} onClick={() => handleProductSelected(res)}>{res.name}</li>)}
    </div>
}
