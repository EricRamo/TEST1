import { Button } from "@/components/ui/button"
import { loadProducts } from "@/lib/loadProducts";

export default async function Dairy() {
  const X = await loadProducts(6);
  const limited = X.slice(0, 1);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-100 py-8 px-6">
        <h1 className="text-2xl font-bold mb-4">Dairy</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limited.map((B) => (
            B.products.map((product) => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
                <img src="/fotos/fotoDAIRY.jpg" alt="Producto 1" width={400} height={300} className="w-full h-48 object-cover" />
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
      </section> </div>
  );
}