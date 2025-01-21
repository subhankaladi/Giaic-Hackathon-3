import AddToBasketButton from "@/components/AddToBasketButton/page";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/getProductBySlug/page";
import { imageUrl } from "@/lib/imageUrl";
// import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return <div>Product not found</div>;
  }

  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative aspect-square overflow-hidden rounded-lg  transition
            
            ${isOutOfStock ? "opacity-50" : ""}`}
        >
          {product.image && (
            <Image
              src={imageUrl(product.image).url()}
              alt={product.name ?? "Product Image"}
              className="w-4/5"
              width={1000}
              height={1000}
            />
          )}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              Out of Stock
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4"> {product.name} </h1>
            <div className="text-xl font-semibold mb-4">
              Price: 
              {`$${product.price.toFixed(2)}`}
              
            </div>
            {/* <div className="font-bold text-lg text-gray-600 mb-5">
              Stocks: {product.stock?? "In Stock"}
            </div> */}
            <div className="prose max-w-none mb-6">
              {/* {Array.isArray(product.description) && (
                            <PortableText value={product.description} />)} */}

              {product.description}
              
            </div>
            <div className="mt-6">
                <AddToBasketButton product={product} disabled={isOutOfStock}/>
            <Button><Link href="/basket">
            CheckOut
            </Link></Button>

          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
