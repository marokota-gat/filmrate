'use client';
import { useRouter, useSearchParams } from "next/navigation";


const pageList = Array.from({ length: 9 }, (_, i) => i + 1);

export default function PageList({ page }: { page: number }) {
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || page;
    const router = useRouter();

    const handleClick = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', pageNumber.toString());
        router.push(`?${params.toString()}`);
    }


    return (
        <div className='flex justify-center items-center text-center gap-2 border border-black/10 rounded-[8px] p-2 max-w-[270px] mt-5'>
            {pageList.map((pageNumber) => (
                <button
                    type="button"
                    key={pageNumber}
                    className={`w-10 h-8 rounded-[8px] text-center items-center justify-center hover:bg-gray-100 ${currentPage === pageNumber
                        ? ' hover:bg-black/80 bg-black/80 text-white font-bold '
                        : 'none'
                        }`}
                    onClick={() => handleClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
        </div>
    )
}