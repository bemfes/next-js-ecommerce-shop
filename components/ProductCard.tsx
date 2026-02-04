
import Link from "next/link"
import Stripe from "stripe"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface Props {
    product: Stripe.Product
}

export const ProductCard = ({product}: Props) => {
    const price = product.default_price as Stripe.Price
    return <Link href='/products/1'>
        <Card>
            {product.images && product.images[0] && (
                <div className="relative h-80 w-full">
                    <Image className="transition-opacity duration-500 ease-in-out" layout="fill" objectFit="cover" alt={product.name} src={product.images[0]}/>
                </div>
                )}
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardContent>
                {price && price.unit_amount && (
                    <p className="text-xl text-white">${(price.unit_amount / 100).toFixed(2)}</p>
                )}
                </CardContent>
                <Button>View Details</Button>
            </CardHeader>
        </Card>
    </Link>
}