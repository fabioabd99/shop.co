import Rating from '@/components/ui/Rating';
import type { Product } from '@/generated/prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="relative aspect-square rounded-2xl bg-card overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="font-bold mt-3">{product.name}</h3>
      <div className="flex items-center gap-2 mt-2">
        <Rating value={product.rating} />
        <span className="text-xs text-gray-600">{product.rating}/5</span>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <span className="font-bold text-xl">${product.price}</span>

        {product.originalPrice && (
          <>
            <span className="font-bold text-xl text-gray-400 line-through">
              ${product.originalPrice}
            </span>
            <span className="text-discount bg-discount/10 rounded-full px-3 py-1 text-xs font-medium">
              -{discount}%
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
