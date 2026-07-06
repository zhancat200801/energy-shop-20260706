import { Zap } from 'lucide-react';

export default function HeaderSection() {
  return (
    <header className="w-full bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-6 flex items-center gap-3">
        <div className="size-9 md:size-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0">
          <Zap className="size-5 md:size-6 text-white" />
        </div>
        <div className="min-w-0">
          <h1 className="text-base md:text-lg font-semibold text-white truncate">
            能源芯智社
          </h1>
          <p className="text-xs md:text-sm text-emerald-300/80 truncate">
            太阳能储能设备精选
          </p>
        </div>
      </div>
    </header>
  );
}
