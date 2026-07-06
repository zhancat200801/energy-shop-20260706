import { motion } from 'framer-motion';
import { ShoppingCart, SearchX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { IProduct } from '@/data/products';
import { Image } from '@/components/ui/image';

interface ProductGridSectionProps {
  products: IProduct[];
}

function ProductCard({ product, index }: { product: IProduct; index: number }) {
  const handleBuy = () => {
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="flex flex-col flex-1 p-4 gap-3">
          <h3 className="text-sm font-medium leading-snug line-clamp-2 text-foreground flex-1">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-orange-600 tabular-nums">
              ¥{product.price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">到手价</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 text-xs font-normal">
              预估佣金 ¥{product.commission.toFixed(2)}
            </Badge>
          </div>
          <Button
            onClick={handleBuy}
            className="w-full mt-auto gap-2"
            size="sm"
          >
            <ShoppingCart className="size-4" />
            立即购买
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
      <SearchX className="size-12 mb-4 text-muted-foreground/50" />
      <p className="text-base font-medium">未找到相关商品</p>
      <p className="text-sm mt-1">试试其他关键词</p>
    </div>
  );
}

export default function ProductGridSection({ products }: ProductGridSectionProps) {
  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
