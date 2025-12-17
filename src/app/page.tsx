import ContentList from './components/ContentList';
import Image from 'next/image';
import ToggleFilter from './components/ToggleFilter';

// In Next.js 16, searchParams è una Promise quindi serve async/await
export default async function Home({ searchParams }: any) {
  const params = await searchParams;  // await perché è una Promise
  const filter = params?.filter || 'tutti';

  return (
    <div>
      <h1 className="text-2xl md:text-3xl">Scopri film e Serie TV</h1>
      <div className="flex h-9 w-full items-center pt-4">
        {/* animated toggle  */}
        <ToggleFilter value={filter} />
        {/* Filter could be exported as a component */}
        <div className="border-[#fffff]/10 ml-auto flex h-9 w-[102px] items-center justify-center gap-3 rounded-[8px] border border-black/10 bg-white text-[15px]">
          <Image
            src="/FilterIcon.svg"
            alt="Filter Icon"
            width={16}
            height={16}
          />
          <div>Generi</div>
        </div>
      </div>
      <ContentList selector={filter} />
    </div>
  );
}
