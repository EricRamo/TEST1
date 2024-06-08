import Link from "next/link"
import { Button } from "@/components/ui/button"
import { loadProducts } from "@/lib/loadProducts";

export default async function Home() {
  const X = await loadProducts(18);
  const limited = X.slice(1, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-100 py-8 px-6">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-4 gap-4">
          <Link
            href="/Fruits"
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors"
            prefetch={false}
          >
            <CitrusIcon className="w-12 h-12" />
            <span className="text-sm font-medium">Fruits and Vegetables</span>
          </Link>
          <Link
            href="/Bakery"
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors"
            prefetch={false}
          >
            <SandwichIcon className="w-12 h-12" />
            <span className="text-sm font-medium">Bakery</span>
          </Link>
          <Link
            href="/Meat"
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors"
            prefetch={false}
          >
            <BeefIcon className="w-12 h-12" />
            <span className="text-sm font-medium">Meat and Fish</span>
          </Link>
          <Link
            href="/Dairy"
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors"
            prefetch={false}
          >
            <MilkIcon className="w-12 h-12" />
            <span className="text-sm font-medium">Dairy Products</span>
          </Link>
        </div>
      </section>
      <section className="py-8 px-6">
        <h2 className="text-2xl font-bold mb-4">More Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {limited.map((H) => (
            H.products.map((product) => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                <img src="/fotos/fotoWATER.jpg" alt="Producto 1" width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.display_name}</h3>
                  <p className="text-gray-500 mb-4">{product.packaging}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 font-semibold">{product.price_instructions.reference_price}€</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>))))}
        </div>
      </section>
    </div>
  )
}

function BeefIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  )
}

function CitrusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </svg>
  )
}

function MilkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8" />
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </svg>
  )
}

function SandwichIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
      <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
      <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
      <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
    </svg>
  )
}