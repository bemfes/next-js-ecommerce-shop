import { Metadata } from "next";
import CheckoutPageContent from "./page.client"

export const metadata: Metadata = {
  title: "Checkout page",
};


export default function CheckoutPage() {
    return <CheckoutPageContent/>
}