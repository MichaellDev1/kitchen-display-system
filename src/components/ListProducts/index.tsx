import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

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
    categorySelected: string
    handleProductSelected: Function
}

interface Filter {
    name: string;
    category: string;
    price: number;
}

const ListProductElement = styled.li`
font-size: 20px;
font-weight: 400;
color: #bbbbbb;
font-weight: 400;
list-style: none;
cursor: pointer;
text-transform: capitalize;
user-select: none; 
`
const ContentProduct = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 10px;
`

export default function ListProducts({ categorySelected, handleProductSelected }: Props) {
    const [products, setProducts] = useState<Filter[]>()

    useEffect(() => {
        const filterProduct = listProducts.filter(product => product.category == categorySelected)
        setProducts(filterProduct)
    }, [categorySelected])

    return <div style={{ minHeight: '340px', maxHeight: '340px', overflowY: 'scroll' }}>
        <ContentProduct>
            {products?.map(res => <ListProductElement key={res.name} onClick={() => handleProductSelected(res)}>{res.name}</ListProductElement>)}
        </ContentProduct>
    </div>
}
