
import Link from 'next/link';
import { ToggleFilterProps } from '../types/filters';



export default function ToggleFilter({ value }: { value: string }) {
  const optionsToggle = [
    { id: 'tutti', label: 'Tutti' },
    { id: 'film', label: 'Film' },
    { id: 'serie', label: 'Serie TV' },
  ];

  return (
    <div>
      <div className="relative flex h-9 w-[190px] items-center rounded-[14px] bg-[#ECECF0] p-1">

        {/* Bottoni */}
        {optionsToggle.map((opt) => (
          <Link
            key={opt.id}
            href={`?filter=${opt.id}`}
            className={`flex rounded-[10px] px-[10px] text-[15px] ${value === opt.id ? 'bg-gray-300' : ''
              }`}
            scroll={false} // opzionale: evita scroll-to-top su SPA navigation
          >
            {opt.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
