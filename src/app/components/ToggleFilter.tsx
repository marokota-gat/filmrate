'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const optionsToggle = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'film', label: 'Film' },
  { id: 'serie', label: 'Serie TV' },
];

export default function ToggleFilter({ value }: { value: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('filter', id);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <div className="relative flex h-9 w-[190px] items-center rounded-[14px] bg-[#ECECF0] p-1">
        {/* Bottoni */}
        {optionsToggle.map((opt) => (
          <button
            type="button"
            key={opt.id}
            className={`flex rounded-[10px] px-[10px] text-[15px] transition-colors ${value === opt.id ? 'bg-gray-300' : 'hover:bg-gray-200'
              }`}
            onClick={() => handleClick(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
