
import ContentCard from './ContentCard';
import { getAll, getMovies, getSeries } from '../lib/utils/contentToShow';
import Link from 'next/link';




export default async function ContentList({ selector }: { selector: string }) {

  var content: any = null;
  const pageList = [1, 2, 3, 4, 5];
  switch (selector) {
    case 'film':
      content = await getMovies();
      break;
    case 'serie':
      content = await getSeries();
      break;
    default:
      content = await getAll();
      break;
  }


  return (
    <div>
      <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* si mette un AND prima del mapping per evitare gli errori se content e' null */}
        {content && content.map((movie: any) => (
          <ContentCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            poster_path={movie.poster_path}
            genre_ids={movie.genre_ids}
            genre_names={movie.genre_names}
            media_type={movie.media_type}
            name={movie.name}
            first_air_date={movie.first_air_date}
          />
        ))}
      </div>
      <div className='flex justify-center items-center text-center gap-2 bg-gray-300 rounded-[8px] p-2'>
        {pageList.map((pageNumber) => (
          <Link href={`?page=${pageNumber}`} key={pageNumber} className='w-10 h-10 bg-gray-300/50 rounded-[8px] text-center items-center justify-center'>
            {pageNumber}
          </Link>
        ))}
      </div>
    </div>

  );
}
