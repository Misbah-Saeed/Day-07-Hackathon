import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import SecondHeader from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Define Product type
type Product = {
  title: string;
  price: number;
  description?: string;
  productImage: {
    asset: {
      url: string;
    };
  };
  slug?: {
    current: string;
  };
  discountPercentage?: number;
};

export default async function BedroomFurniture() {
  // ✅ Sanity Query with `defined(slug.current)` to prevent errors
  const products: Product[] = await client.fetch(
    `*[_type == "product" && category == "bedroom furniture" && defined(slug.current)]{
      title,
      price,
      description,
      productImage {
        asset -> { url }
      },
      slug,
      discountPercentage
    }`
  );

  // Function to truncate long descriptions
  const truncateDescription = (text: string | undefined) => {
    return text && text.length > 100
      ? text.slice(0, 100) + "..."
      : text || "No description available.";
  };

  return (
    <div>
      <SecondHeader />
      <div className="p-4">
        {/* Centered Heading */}
        <h1 className="text-3xl font-bold text-center mt-10 mb-6">
          Bedroom Furniture
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-5 gap-4 mx-auto max-w-7xl">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white shadow rounded p-2 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:bg-gray-100"
            >
              <div className="w-40 h-40 overflow-hidden rounded flex justify-center items-center bg-gray-100">
                <Image
                  src={product.productImage.asset.url}
                  alt={product.title}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <h2 className="font-bold text-sm mt-2 text-center">
                {product.title}
              </h2>
              <p className="text-gray-500 text-xs">${product.price}</p>
              <p className="text-slate-800 mt-2 text-xs text-center">
                {truncateDescription(product.description)}
              </p>
              {product.discountPercentage && product.discountPercentage > 0 && (
                <p className="text-xs text-green-600">
                  {product.discountPercentage}% OFF
                </p>
              )}
              <Link
                href={product.slug?.current ? `/product/${product.slug.current}` : "#"}
                className="block px-2 py-1 text-center bg-accentDarkSecondary rounded text-dark font-semibold mt-2 text-xs"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
