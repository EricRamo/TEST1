import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://coopsanjosenules.es/wp-content/uploads/abc1051497a0b98bb7fcf992f6a4de40.jpg" alt="Product 1" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Butifarra</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">6.99€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">3.99€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202304/24/00118156701254____7__600x600.jpg" alt="Product 2" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Bolsa Naranjas</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">4.50€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">2.50€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://www.15bodegas.com/media/catalog/product/cache/eb3fb333d6d48f7945011b4bf9583efe/b/o/botella-bach-extrisimo-semidulce-vini-blanco.jpg" alt="Product 2" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Vino Blanco Bach</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">12.99€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">8.99€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202101/12/00118005700614____3__600x600.jpg" alt="Product 2" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Arroz 1kg</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">2.99€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">0.99€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://laflor.es/images/papel-higienico-domestico-luy-12rollos.jpg" alt="Product 2" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Papel Higénico</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">4€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">2.5€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://calvo.es/wp-content/uploads/2020/05/Atun-claro-natural-Calvo-700x350-1.jpg" alt="Product 2" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Atún Claro</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">6€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">4.50€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://www.aceitesladehesa.com/tienda/36-large_default/caja-15-unidades-1-litro-pet.jpg" alt="Product 3" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Aceite de Oliva 1L</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">11.99€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">7.99€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <Link href="#" className="block" prefetch={false}>
          <img src="https://m.media-amazon.com/images/I/81asAiN4uIS.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Product 4" width={400} height={300} className="w-full h-60 object-cover" />
        </Link>
        <div className="p-4">
          <h3 className="font-bold text-lg md:text-xl">Pechuga de Pollo</h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-gray-500 line-through text-base md:text-lg">3.60€</p>
            <p className="font-bold text-primary text-xl md:text-2xl">2.99€</p>
            <Button size="sm">Add to Cart</Button> 
          </div>
        </div>
      </div>
    </section>
  )
}