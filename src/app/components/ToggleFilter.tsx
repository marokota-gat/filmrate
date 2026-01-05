'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { startTransition, ViewTransition } from "react";


const optionsToggle = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'film', label: 'Film' },
  { id: 'serie', label: 'Serie TV' },
];

export default function ToggleFilter({ value }: { value: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (id: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('filter', id);
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="flex h-9 w-[190px] items-center justify-center rounded-[14px] bg-[#ECECF0] p-1">
      {optionsToggle.map((opt) => (
        <button
          type="button"
          key={opt.id}
          className={`flex rounded-[14px] px-[10px] py-1 text-[14px] transition-all duration-200 ${value === opt.id
            ? 'bg-white text-black shadow-sm'
            : 'text-gray-600 hover:text-black'
            }`}
          onClick={() => handleClick(opt.id)}
        >
          <ViewTransition>
            <div className='text-[14px]'>{opt.label}</div>
          </ViewTransition>
        </button>
      ))}
    </div>
  );
}
