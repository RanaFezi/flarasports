'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products-data';

export default function Collections() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center sm:text-left">Collections</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="relative h-64 sm:h-72 lg:h-80 w-full bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="mt-auto">
                  <button className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium">
                    View Collection
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
