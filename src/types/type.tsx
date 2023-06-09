export interface ProductInterface {
    name: string
    category: string
    price: number
    cantidad: number
    terminate: boolean
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

export interface Initial {
    ordes: Order[] | []
}
