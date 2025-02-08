"use client"; 

import { useState } from "react";
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { FaHeart } from "react-icons/fa"; // Wishlist icon
// import { client } from "@/sanity/lib/client";


interface ProductPageProps {
  params: { slug: string };
}

const truncateDescription = (text: string | undefined) => {
  return text && text.length > 1250
    ? text.slice(0, 1250) + "..."
    : text || "No description available.";
};

// Fetch product details from Sanity (still a Server Component)
async function getProduct(slug: string): Promise<Product | null> {
  try {
    return client.fetch(
      groq`
        *[_type == "product" && slug.current == $slug][0]{
          _id, 
          title,
          _type,
          productImage,
          price,
          description,
          tags,
          discountPercentage,
          colors
        }
      `,
      { slug }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p className="text-gray-600 mt-4">The product you're looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.productImage?.asset?._ref ? (
            <Image
              src={urlFor(product.productImage.asset._ref).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          ) : (
            <div className="bg-gray-200 h-full w-full rounded-lg flex items-center justify-center">
              <p className="text-gray-500">No image available</p>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          {product.discountPercentage > 0 && (
            <p className="text-green-600 font-medium">
              {product.discountPercentage}% OFF
            </p>
          )}
          <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
          <p className="text-2xl font-semibold text-gray-700">
            <span className="text-2xl">Price: </span>${product.price ? product.price.toFixed(2) : "N/A"}
          </p>
          
          {/* Available Colors */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <h2 className="font-medium">Available Colors:</h2>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="block w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags?.length ? (
              product.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-200 text-gray-800 rounded-md px-2 py-1">
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-500">No tags available.</span>
            )}
          </div>

          {/* Add to Cart Button with Icons */}
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

// Client component for the Add to Cart button with icons
const AddToCartButton = ({ product }: { product: Product }) => {
  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="flex items-center justify-between">
      {/* Icons (Wishlist and Cart) */}
      <div className="flex items-center gap-4">
        <FaHeart className="text-gray-700 text-3xl cursor-pointer" title="Add to Wishlist" />
        <a href="/Cart">
  <FaShoppingCart className="text-gray-700 text-3xl cursor-pointer" title="Go to Cart" />
</a>

      </div>

      {/* Add to Cart Button */}
      <button
        className="bg-gray-600 text-white py-2 px-3 rounded-md flex items-center gap-2"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};
