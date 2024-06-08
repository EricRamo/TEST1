"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Agua Viladrau",
      image: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202404/08/00118630000356____22__600x600.jpg",
      price: 1.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Hamburguesa Vacuno",
      image: "https://www.beigorri.eus/433-large_default/2-bandejas-hamburguesa-ternera-eusko-label-2x120gr-ecologica.jpg",
      price: 5.99,
      quantity: 2,
    },
    {
      id: 3,
      name: "Lechuga Iceberg",
      image: "https://carmelofruit.com/wp-content/uploads/2023/05/FM-LECHUGA-ICEBERG-NEW-1.png",
      price: 1.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Pan Hamburguesa",
      image: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/28/00120653400141____7__600x600.jpg",
      price: 2,
      quantity: 1,
    },
    {
      id: 3,
      name: "Queso Cheddar",
      image: "https://queserialafuente.com/uploads/productos/productos/producto/QUESERIA_LAFUENTE_cheddarlonchas.png",
      price: 2.99,
      quantity: 1,
    },
  ])
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const handleUpdateQuantity = (id, quantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity: quantity } : item)))
  }
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-[4/3] bg-gray-100">
              <img
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium mb-2">{item.name}</h2>
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-500">{item.price.toFixed(2)}€</p>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    <MinusIcon className="w-4 h-4" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button size="icon" variant="ghost" onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                    <PlusIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>{total.toFixed(2)}€</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping</p>
            <p>1.2€</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between font-bold">
            <p>Total</p>
            <p>{total.toFixed(2)}€</p>
          </div>
        </div>
        <Button className="w-full mt-4">Proceed to Checkout</Button>
      </div>
    </div>
  )
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

