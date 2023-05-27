import { useEffect, useState } from 'react'
import { ContentProduct, ListProductElement, Container } from './styled'
import { listProducts } from '../../utils/productsList';


interface Props {
    categorySelected: string
    handleProductSelected: Function
}

interface Filter {
    name: string;
    category: string;
    price: number;
}


export default function ListProducts({ categorySelected, handleProductSelected }: Props) {
    const [products, setProducts] = useState<Filter[]>()

    useEffect(() => {
        const filterProduct = listProducts.filter(product => product.category == categorySelected)
        setProducts(filterProduct)
    }, [categorySelected])

    return <Container>
        <ContentProduct>
            {
            products?.map(res => (
                <ListProductElement key={res.name} onClick={() => handleProductSelected(res)}>{res.name}</ListProductElement>
            ))
            }
        </ContentProduct>
    </Container>
}
