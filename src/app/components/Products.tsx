"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Items = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Truncate Description for Display
  const truncateDescription = (text: string | undefined) => {
    return text && text.length > 100
      ? text.slice(0, 100) + "..."
      : text || "No description available.";
  };

  // Fetch Products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching products:", error.message);
        } else {
          console.error("An unexpected error occurred:", error);
        }
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {/* <Link href={`/product/${product.slug}`}> */}
              
            {product.productImage?.asset?._ref && (
              <Image
                src={urlFor(product.productImage.asset._ref).url()}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
            <p className="text-gray-500 mt-2">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            <p className="text-slate-800 mt-2 text-sm">
              {truncateDescription(product.description)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-sm text-green-600">
                {product.discountPercentage}% OFF
              </p>
            )}

            {/* Read More dynamic Link */}
            <Link
              href={`/product/${product.slug?.current}`}
              className="block px-4 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-4"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
