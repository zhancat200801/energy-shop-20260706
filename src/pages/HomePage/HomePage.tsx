import { useState, useMemo } from 'react';
import { MOCK_PRODUCTS } from '@/data/products';
import HeaderSection from './sections/HeaderSection';
import ToolbarSection from './sections/ToolbarSection';
import ProductGridSection from './sections/ProductGridSection';
import FooterSection from './sections/FooterSection';

export default function HomePage() {
  const [keyword, setKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    let list = MOCK_PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase()),
    );
    list = [...list].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price,
    );
    return list;
  }, [keyword, sortOrder]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeaderSection />

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-6">
          <ToolbarSection
            keyword={keyword}
            onKeywordChange={setKeyword}
            sortOrder={sortOrder}
            onSortToggle={() =>
              setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
            }
          />
          <ProductGridSection products={filtered} />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
