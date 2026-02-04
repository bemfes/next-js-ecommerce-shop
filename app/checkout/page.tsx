'use client'
import { useCartStore } from "@/store/storeCart"

export default function CheckoutPage() {

    const {items} = useCartStore()
    const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    if (total || items.length) {
        return <div> <h1>Your Cart is Empty.</h1> </div>
    }

    return <p>checkout page</p>
}