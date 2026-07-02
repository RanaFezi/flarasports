'use client';

import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  name: string;
}

const productCategories = [
  {
    id: 'baseball-shirts',
    title: 'Baseball Shirts',
    products: [
      { id: 1, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309336-Photoroom%20%281%29-62CNTbY1c83T2D0lkEFFFv5zWisJvX.jpg', name: 'Baseball Shirt 1' },
      { id: 2, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309335-Photoroom%20%281%29-3skOxwnbVHrhdB9oCpTZmxlF16qSRo.jpg', name: 'Baseball Shirt 2' },
      { id: 3, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309339-Photoroom%20%281%29-XlGy8lts4xmqnvfMe4Lz4JASI3pMWB.jpg', name: 'Baseball Shirt 3' },
    ],
  },
  {
    id: 'hoodies',
    title: 'Hoodies',
    products: [
      { id: 1, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21f73cb4aa5e45d3f9d769cb72268586%20%281%29-4i7FEmBGyyjikA5UqpzDTTbD42ms4W.png', name: 'Navy Hoodie' },
      { id: 2, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7dd9f251fb2a49d51ca8f2e510576c2e-5LLNgBmH4lo3X95qzNZ4YpJObqzuPv.png', name: 'Black Hoodie' },
      { id: 3, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9d19f527ed70d931a068258fcecd8670-A3cTJRdwOxLJqThm1vXVo3Gy3LmKsa.png', name: 'Beige Hoodie' },
      { id: 4, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/be403a4fb77eb8e168f9246c3eb6937d-CslGrwZxdCMWzHHi5iy1BbRboYgyum.png', name: 'Burgundy Hoodie' },
    ],
  },
  {
    id: 'soccer-kits',
    title: 'Soccer Kits',
    products: [
      { id: 1, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309268-Photoroom%20%281%29-FfzDl71qjcBpaKNskHphU4WwuBFQVb.jpg', name: 'Green Soccer Kit' },
      { id: 2, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309319-Photoroom%20%281%29-c8fdzDtaJiIHjZrlw9AOJT7ggil0GE.jpg', name: 'White Soccer Kit' },
      { id: 3, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309262-Photoroom%20%281%29-y9xBcaL5GyoFTkDyT8O8coy7S5KKXC.jpg', name: 'Blue Soccer Kit' },
      { id: 4, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309324-Photoroom%20%281%29-Lp5qtFkSO8rhQNp5UP0DuSCUqVgt2p.jpg', name: 'Black Soccer Kit' },
      { id: 5, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309258-Photoroom%20%281%29-j2Q3BDS42WpOrJiCfECHYAcPuULG5U.jpg', name: 'Red Soccer Kit' },
      { id: 6, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309256-Photoroom%20%281%29-JdYOJmyemQL3EEZyBvqrUnGtPGUCOS.jpg', name: 'Royal Blue Soccer Kit' },
      { id: 7, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309330-Photoroom%20%281%29-bjCv9P9QHRRa9NPfMsiqhDsqSDrUxN.jpg', name: 'Purple Soccer Kit' },
      { id: 8, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309251-Photoroom%20%281%29-tCRXDFvSagq126L3kjoeYhpKABPZ42.jpg', name: 'White/Blue Soccer Kit' },
    ],
  },
  {
    id: 'legging-pants',
    title: 'Legging Pants',
    products: [
      { id: 1, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309223-Photoroom%20%281%29-FaVZkn365lAPrIwzVkku4TLAmL58Qk.jpg', name: 'White Geometric Leggings' },
      { id: 2, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309192-Photoroom%20%281%29-dWjRYVjiJTjEBJffIteEaejCBCsTt5.jpg', name: 'Beige Leggings' },
      { id: 3, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309195-Photoroom%20%281%29-tphzSPS31CTyI3H9BUENZGyp2vKCTV.jpg', name: 'Grey Leggings' },
      { id: 4, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309204-Photoroom%20%281%29-Jxi5743zEUxak05KmWyfHDz0HDlXbU.jpg', name: 'Black/White Pattern Leggings' },
      { id: 5, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309216-Photoroom%20%281%29-NjKlHyRm0Z8kqjtkOfvzOAUC7vlgo3.jpg', name: 'Pink Gradient Leggings' },
      { id: 6, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309206-Photoroom%20%281%29-SaQYIKVVVom6jtENLS2K7im71YduV5.jpg', name: 'Leopard Print Leggings' },
      { id: 7, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309202-Photoroom%20%281%29-mHUjZPfwGpIiHzZMeHid1LojjAqzMp.jpg', name: 'Blue Geometric Leggings' },
      { id: 8, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000309196-Photoroom%20%281%29-gbiStyyffUvH1fSSVjtl4uyACH5Ezx.jpg', name: 'Purple Leggings' },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Products</h2>
        
        {productCategories.map((category) => (
          <div key={category.id} id={category.id} className="mb-20 scroll-mt-20">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">{category.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 font-medium text-center">{product.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
