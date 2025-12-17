
import ContentCard from './ContentCard';
import { getAll, getMovies, getSeries } from '../lib/utils/contentToShow';




export default async function ContentList({ selector }: { selector: string }) {

  var content: any = null;

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
      {/* <div className='flex justify-center items-center'>
        <button>
          <Image />
        </button>
        {pageList.map(nPage) => (
          <div onClick={}></div>
        )}
      </div> */}
    </div>

  );
}
