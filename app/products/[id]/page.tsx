import { ProductDetail } from "@/components/ProductDetails"
import { stripe } from "@/lib/stripe"
import { Metadata } from "next"


interface Params {
  id: string
}

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
    const product = await stripe.products.retrieve(params.id, {
        expand: ['default_price']
    })
    if (!product) {
        return {
            title: 'Not found',
            description: 'The requested product could not be found'
        }
    }
    return {
        title: `${product.name} | My Ecommerce Shop`,
        description: `${product.description}`
    }
}

export default async function ProductDetailsPage({params}: {params: Params}) {
    const product = await stripe.products.retrieve(params.id, {
        expand: ['default_price']
    })

    const plainProduct = JSON.parse(JSON.stringify(product))

    return <ProductDetail product={plainProduct}></ProductDetail>
}