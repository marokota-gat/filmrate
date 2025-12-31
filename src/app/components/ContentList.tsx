
import ContentCard from './ContentCard';
import { getContent, getAll, getMovies, getSeries } from '../lib/utils/contentToShow';
import Link from 'next/link';
import PageList from './PageList';




export default async function ContentList({ selector, page }: { selector: string; page: number }) {

  var content: any = null;

  content = await getContent(selector, page);

  return (
    <div className='flex flex-col items-center justify-center'>
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
      <PageList page={page} />
    </div>
  );
}
