import { Search, ArrowUpDown, ArrowDown, ArrowUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ToolbarSectionProps {
  keyword: string;
  onKeywordChange: (value: string) => void;
  sortOrder: 'asc' | 'desc';
  onSortToggle: () => void;
}

export default function ToolbarSection({
  keyword,
  onKeywordChange,
  sortOrder,
  onSortToggle,
}: ToolbarSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
      <div className="relative flex-1 min-w-0">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          placeholder="搜索商品名称..."
          className="bg-background pl-9 h-10"
        />
      </div>
      <Button
        variant="outline"
        size="default"
        onClick={onSortToggle}
        className="h-10 shrink-0 gap-2 text-sm"
      >
        <ArrowUpDown className="size-4" />
        价格
        {sortOrder === 'asc' ? (
          <ArrowUp className="size-3" />
        ) : (
          <ArrowDown className="size-3" />
        )}
        {sortOrder === 'asc' ? '从低到高' : '从高到低'}
      </Button>
    </div>
  );
}
