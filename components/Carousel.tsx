"use client"
import Stripe from "stripe"
import { Card, CardContent, CardTitle } from "./ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"

interface Props {
    products: Stripe.Product[]
}

export const Carousel = ({products}: Props) => {
    const [current, setCurrent] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % products.length)
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [products.length])
    const currentProduct = products[current]
    const price = currentProduct.default_price as Stripe.Price
    return <Card>
        {currentProduct.images && currentProduct.images[0] && (
            <div>
                <Image layout="fill" objectFit="cover" alt={currentProduct.name} src={currentProduct.images[0]}/>
            </div>
        )}
       <CardContent>
        <CardTitle>{currentProduct.name}</CardTitle>
        {price && price.unit_amount && (
            <p>${(price.unit_amount / 100).toFixed(2)}</p>
        )}
       </CardContent>
    </Card>
}