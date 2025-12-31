'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ViewTransition } from "react";


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
    <div className="flex h-9 w-[190px] justify-center items-center  rounded-[14px] bg-[#ECECF0] p-1">
      {/* Bottoni */}
      {optionsToggle.map((opt) => (
        <button
          type="button"
          key={opt.id}
          className={`flex rounded-[14px] px-[10px] text-[15px] transition-colors duration-200 ${value === opt.id ? 'white' : 'hover:white'}`}
          onClick={() => handleClick(opt.id)}
        >
          {opt.label}
        </button>
      ))}

    </div>
  );
}
