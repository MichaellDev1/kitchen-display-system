export interface ProductInterface {
    name: string
    category: string
    price: number
    cantidad: number
}

export interface Order {
    canceled: boolean
    completed: boolean
    mesa: number
    order: string
    products: ProductInterface[]
    state: string
    comment: string | null
    waiter: string
}

export interface ORdes {
    mesa: number,
    order: string,
    products: Array<ProductInterface>
    state: string
    canceled: boolean
}

export interface Initial {
    ordes: Order[] | []
}
