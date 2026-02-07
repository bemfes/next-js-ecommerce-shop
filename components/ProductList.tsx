'use client'
import Stripe from "stripe"
import { ProductCard } from "./ProductCard"
import { useDeferredValue, useState } from "react"

interface Props {
    products: Stripe.Product[]
}

export const ProductList = ({products}: Props) => {

    const [searchItem, setSearchItem] = useState<string>('')

    const defferedSearchItem = useDeferredValue(searchItem)

    const filteredProducts = products.filter((product) => {
        const item = defferedSearchItem.toLowerCase()
        const nameMatch = product.name.toLocaleLowerCase().includes(item)
        const descriptionMatch = product.description ? product.description.toLocaleLowerCase().includes(item) : false
        return nameMatch || descriptionMatch
    })
    
    return <div>
        <div className="mb-6 flex justify-center">
            <input 
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="Search products..." />
        </div>
        {filteredProducts.length === 0 ? <p className="mt-2 text-md text-medium text-black text-center">The item is not found... Please try to find something else</p> :
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
                return <li key={product.name}>
                    <ProductCard product={product}></ProductCard>
                </li>
            })}
        </ul>
        }
    </div>
}