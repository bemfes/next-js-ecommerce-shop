import Stripe from "stripe"
import { ProductCard } from "./ProductCard"

interface Props {
    products: Stripe.Product[]
}

export const ProductList = ({products}: Props) => {
    return <div>
        <div className="mb-6 flex justify-center">
            <input 
            className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            type="text" 
            placeholder="Search products..." />
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
                return <li key={product.name}>
                    <ProductCard product={product}></ProductCard>
                </li>
            })}
        </ul>
    </div>
}