'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCartStore } from "@/store/storeCart"

export default function CheckoutPage() {

    const {items} = useCartStore()
    const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    if (items.length === 0) {
        return <div> <h1>Your Cart is Empty.</h1> </div>
    }

    return <div>
        <h1>Checkout</h1>
        <Card>
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            <div>
                                <span>{item.name}</span>
                                <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
}