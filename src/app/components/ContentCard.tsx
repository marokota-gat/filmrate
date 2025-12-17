import Image from 'next/image';
import { getPosterUrl } from '../lib/api/tmdb';
import { All } from '../types/content';

export default function ContentCard({
  poster_path,
  title,
  release_date,
  vote_count,
  vote_average,
  genre_names,
  media_type,
  name,
  first_air_date
}: All) {
  const posterURL = getPosterUrl(poster_path);
  const toTitleCase = (str: string) => {
    switch (str) {
      case 'movie':
        return 'Film';
      case 'tv':
        return 'Serie TV'; break;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-between rounded-[14px] border border-black/10 bg-white transition-shadow duration-200 hover:shadow-[0_10px_15px_-8px_rgba(0,0,0,0.2)]">
      {/* poster */}
      <div className="relative flex aspect-[2/3] w-full overflow-hidden rounded-t-[14px]">
        <Image src={posterURL} alt="poster" fill className="object-cover" />
        <div className="absolute bottom-[20px] p-1 left-3 gap-2 rounded-[8px] flex h-[22px] max-w-28 items-center bg-[#ECEEF2] text-[12px] text-[#717182] justify-center ">
          <Image src="/IconCinema.svg" alt="media_type" width={12} height={12} />
          <p className='text-[12px] text-[#030213]'>{toTitleCase(media_type)}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-[14px] font-medium text-[#0A0A0A] sm:text-[16px]">
          {title || name}
        </h3>

        <div className="flex items-center">
          <Image src="/CalendarIcon.svg" alt="data" width={12} height={12} />
          <p className="pl-2 text-[12px] text-[#717182] sm:text-[14px]">
            {release_date || first_air_date}
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Image
            src="/StarIcon.svg"
            alt="star"
            width={14}
            height={14}
            className="sm:h-4 sm:w-4"
          />
          <span className="text-[12px] sm:text-[14px]">
            {Number(vote_average).toFixed(1)}
          </span>
          <span className="text-[9px] text-[#717182] sm:text-[10px] md:text-[12px]">
            ({vote_count} recensioni)
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1">
          {genre_names?.map((name, index) => (
            <div
              key={index}
              className="rounded-[8px] border border-black/10 px-2 py-1 text-[11px] sm:text-[12px]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// import Link from "next/link";
// import { supabase } from "@/lib/supabaseClient";
// import ProductGrid from "@/components/ProductGrid";
// import { getProducts } from "@/lib/getProduct";

// export default async function ProductsPage({ searchParams }: { searchParams: any }) {
//   // await searchParams perché è una Promise
//   const params = await searchParams;
//   const categoryFilter = params?.category;

//   let products;
//   if (categoryFilter) {
//       products = await getProducts(categoryFilter)
//     }
//   else {
//       products = await getProducts()
//     }

//   // Estrai categorie uniche dai prodotti
//   const { data: allProducts } = await supabase.from("products").select("category");
//   const categories = Array.from(new Set(allProducts?.map((p: any) => p.category)));

//   return (
//     <main className="max-w-6xl mx-auto py-16 space-y-8">
//       <h1 className="text-3xl font-bold text-center mb-8 !text-white">Catalogo Prodotti</h1>

//       {/* Filtri per categoria */}
//       <div className="flex justify-center gap-4 mb-8 flex-wrap">
//         <Link
//           href="/products"
//           className={`px-4 py-2 border rounded hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300 ${
//             !categoryFilter ? "bg-gray-200 text-gray-900" : ""
//           }`}
//         >
//           Tutte
//         </Link>
//         {categories.map((cat: string) => (
//           <Link
//             key={cat}
//             href={⁠ /products?category=${cat} ⁠}
//             className={`px-4 py-2 border rounded hover:bg-gray-100 hover:text-gray-900 capitalize transition-colors duration-300 ${
//               categoryFilter === cat ? "bg-gray-200 text-gray-900" : ""
//             }`}
//           >
//             {cat}
//           </Link>
//         ))}
//       </div>

//       {/* ProductGrid */}
//       <ProductGrid
//         products={products?.map((p: any) => ({
//           ...p,
//           link: ⁠ /products/${p.id} ⁠,
//         })) || []}
//       />
//     </main>
//   );
// }
