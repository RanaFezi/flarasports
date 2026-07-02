import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Product Title */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
          <p className="text-base sm:text-lg text-gray-600">{product.description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {product.images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`${product.title} ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Interested in {product.title}?</h2>
          <p className="text-gray-600 mb-6 px-2">Contact us for orders and bulk pricing inquiries.</p>
          <a 
            href="https://wa.me/923080060888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
