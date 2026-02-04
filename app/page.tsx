import { Carousel } from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  const products = await stripe.products.list(
    {
      expand: ['data.default_price'],
      limit: 5
    }
  )
  console.log(products);
  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to My Ecommerce</h2>
            <p className="text-neutral-600">Discover the latest products at the best prices</p>
            <Button className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white" asChild variant="default">
              <Link className="inline-flex items-center justify-center rounded-full px-6 py-3" href="/products">Browse all products</Link>
            </Button>
          </div>
          <Image src={products.data[2].images[0]} alt="Banner image" width={450} height={450}/>
        </div>
      </section>
      <section className="py-8">
        <Carousel/>
      </section>
    </div>
  );
}
