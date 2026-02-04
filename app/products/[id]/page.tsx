import { stripe } from "@/lib/stripe"


export default async function ProductDetailsPage({params}: {params: { id: string }}) {
    const product = await stripe.products.retrieve(params.id, {
        expand: ['default_price']
    })
    return <div></div>
}