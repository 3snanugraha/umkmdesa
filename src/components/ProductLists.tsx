"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  sold?: number;
  isPopular?: boolean;
  stock: number;
  description: string;
  seller: {
    name: string;
    location: string;
  };
}

interface ProductListsProps {
  products: Product[];
  title?: string;
  limit?: number;
  showRating?: boolean;
  showSeller?: boolean;
  layout?: "grid" | "list";
  category?: string;
  isPopular?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

const ProductLists = ({
  products,
  title,
  limit = 8,
  showRating = true,
  showSeller = true,
  layout = "grid",
  category,
  isPopular,
  onLoadMore,
  hasMore = false,
}: ProductListsProps) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="w-full">
      {title && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {category && (
            <Link
              href={`/kategori/${category}`}
              className="text-green-600 hover:text-green-700"
            >
              Lihat Semua
            </Link>
          )}
        </div>
      )}

      <div
        className={`grid ${
          layout === "grid"
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-1"
        } gap-4 md:gap-6`}
      >
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Link href={`/produk/${product.id}`}>
              <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain bg-white p-4 transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {product.stock < 1 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold">Stok Habis</span>
                  </div>
                )}
                {isPopular && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    Popular
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <div className="mb-2">
                  <span className="text-xl font-bold text-green-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {showRating && (
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star ${
                            i < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    {product.sold && (
                      <span className="text-sm text-gray-500 ml-2">
                        Terjual {product.sold}
                      </span>
                    )}
                  </div>
                )}

                {showSeller && (
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-store mr-1"></i>
                    <span>{product.seller.name}</span>
                    <i className="fas fa-map-marker-alt ml-2 mr-1"></i>
                    <span>{product.seller.location}</span>
                  </div>
                )}
              </div>
            </Link>

            {hoveredProduct === product.id && product.stock > 0 && (
              <div className="p-4 border-t">
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Tambah ke Keranjang
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMore && onLoadMore && (
        <div className="text-center mt-8">
          <button
            onClick={onLoadMore}
            className="bg-white border-2 border-green-600 text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition-colors"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductLists;
