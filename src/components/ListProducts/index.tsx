import React, { useEffect, useState } from 'react'

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
    {
        name: 'Pera',
        category: 'desayunos',
        price: 3
    }, {
        name: 'Manzana',
        category: 'desayunos',
        price: 7
    },
    {
        name: 'Naranja',
        category: 'desayunos',
        price: 3
    }, {
        name: 'Frutilla',
        category: 'desayunos',
        price: 7
    },
]

interface Props {
    setSelected: React.Dispatch<React.SetStateAction<string | null>>
    categorySelected: string
    handleProductSelected: Function
}

interface Filter {
    name: string;
    category: string;
    price: number;
}

export default function ListProducts({ categorySelected, setSelected, handleProductSelected }: Props) {
    const [products, setProducts] = useState<Filter[]>()

    useEffect(() => {
        const filterProduct = listProducts.filter(product => product.category == categorySelected)
        setProducts(filterProduct)
    }, [categorySelected])

    return <div>
        <button onClick={() => setSelected(null)}>Regresar</button>
        {products?.map(res => <li key={res.name} onClick={() => handleProductSelected(res)}>{res.name}</li>)}
    </div>
}
