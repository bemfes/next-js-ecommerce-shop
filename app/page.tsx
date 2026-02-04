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
      <section>
        <div>
          <div>
            <h2>Welcome to My Ecommerce</h2>
            <p>Discover the latest products at the best prices</p>
            <Button asChild variant="default">
              <Link href="/products">Browse all products</Link>
            </Button>
          </div>
          <Image src={products.data[0].images[0]} alt="Banner image" width={450} height={450}/>
        </div>
      </section>
    </div>
  );
}
