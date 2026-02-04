'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCartStore } from "@/store/storeCart"

export default function CheckoutPage() {

    const {items, removeItem, addItem} = useCartStore()
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
                            <div>
                                 <Button onClick={() => removeItem(item.id)} variant="outline">-</Button>
                                 <span className="text-lg font-semibold">{item.quantity}</span>
                                 <Button onClick={() => addItem({ ...item, quantity: 1 })} variant="outline">+</Button>
                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                    Total: ${(total / 100).toFixed(2)}
                </div>
            </CardContent>
        </Card>
    </div>
}