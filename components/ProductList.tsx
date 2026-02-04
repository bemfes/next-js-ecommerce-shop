import Stripe from "stripe"

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
                return <li key={product.name}></li>
            })}
        </ul>
    </div>
}