import Stripe from "stripe"
import { ProductCard } from "./ProductCard"

interface Props {
    products: Stripe.Product[]
}

export const ProductList = ({products}: Props) => {
    return <div>
        <div>
            <input type="text" placeholder="Search products..." />
        </div>
        <ul>
            {products.map((product) => {
                return <li key={product.name}>
                    <ProductCard product={product}></ProductCard>
                </li>
            })}
        </ul>
    </div>
}