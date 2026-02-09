import { ProductDetail } from "@/components/ProductDetails"
import { stripe } from "@/lib/stripe"
import { Metadata } from "next"


interface Params {
  id: string
}

type ProductPageProps = {
    params: Promise<Params>
}

export async function generateMetadata({params}: ProductPageProps): Promise<Metadata> {
    const {id } = await params
    const product = await stripe.products.retrieve(id, {
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

export default async function ProductDetailsPage({params}: ProductPageProps) {
    const {id} = await params
    const product = await stripe.products.retrieve(id, {
        expand: ['default_price']
    })

    const plainProduct = JSON.parse(JSON.stringify(product))

    return <ProductDetail product={plainProduct}></ProductDetail>
}