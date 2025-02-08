"use client";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import SecondHeader from "../components/Header";
import { useEffect, useState } from "react";
import { FaTrash, FaHeart } from "react-icons/fa"; 
import { urlFor } from "@/sanity/lib/image";


import Link from "next/link"; 

const CartPage = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Function to add product to cart
  const handleAddToCart = (product: any) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id); 

    if (existingProductIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; 
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    } else {
      const newProduct = { ...product, quantity: 1 }; 
      const updatedCart = [...cart, newProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Handle quantity change (increase or decrease)
  const handleQuantityChange = (index: number, action: "increase" | "decrease") => {
    const updatedCart = [...cart];
    if (action === "increase") {
      updatedCart[index].quantity += 1;
    } else if (action === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const handleRemoveItem = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  // Calculate the total price and total quantity in the cart
  const calculateTotal = () => {
    let totalPrice = 0;
    let totalQuantity = 0;

    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
      totalQuantity += product.quantity;
    });

    return { totalPrice, totalQuantity };
  };

  const { totalPrice, totalQuantity } = calculateTotal();
  const freeDeliveryThreshold = 5000; 
  const deliveryCharges = totalPrice >= freeDeliveryThreshold ? 0 : 100; 
  const totalAmount = totalPrice + deliveryCharges; 

  return (
    <>
      <SecondHeader />
      <div className="relative">
        <Image
          src="/images/Im1.png"
          alt="backgroud"
          width={400}
          height={400}
          className="object-cover rounded-md w-[100%] h-[300px]"
        />
        <div className="mt-[-40px] ml-[-40px] absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            height={716}
            width={1440}
            className="w-full h-full object-cover"
          />
          <h3 className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>cart</h3>
          </div>
        </div>
      </div>

      <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[200px] bg-[#F9F1E7]">
        <div>
          <Image
            src="/images/Vector.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <Image
            src="/images/Vector (1).png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <Image
            src="/images/Vector (2).png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
          <Image
            src="/images/Vector (3).png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>

        <div className="mb-8">
          <h2 className="text-3xl text-[#252B42] font-bold">Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className="flex items-center justify-center text-2xl h-60 flex-col">
            <p>Your cart is empty.</p>
            <Link href="/Shop" className="text-[#23A6F0] mt-2">Go to Shop</Link>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3">
              {cart.map((product, index) => (
                <div key={index} className="flex items-center py-4 border-b">
                  <div className="w-1/4">
                    <img
                      src={urlFor(product.productImage?.asset._ref).url()}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="mb-2"
                    />
                  </div>
                  <div className="w-1/4">
                    <h2 className="text-xl font-bold">{product.title}</h2>
                    <div className="flex space-x-2">
                      <FaHeart className="text-red-500" />
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(index, "decrease")}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="font-semibold">{product.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(index, "increase")}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-1/4">
                    <p className="font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-1 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
              <div className="flex justify-between mb-4">
                <p>Subtotal:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Delivery Charges:</p>
                <p>${deliveryCharges.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4 font-semibold text-lg">
                <p>Total:</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-center mt-4">
                <Link href="/CheckOut">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      
      <Footer />
    </>
  );
};

export default CartPage;
