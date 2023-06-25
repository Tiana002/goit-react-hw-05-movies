import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { ListCast, ItemCast, TextCast, ImgCast, TextEm } from './Cast.styled';
import { getCreditsMovie } from 'API';

const Cast = () => {
  const { movieId } = useParams();

  const [filmCast, setFilmCast] = useState([]);

  useEffect(() => {
    try {
      getCreditsMovie(movieId).then(res => setFilmCast(res.cast.splice(0, 8)));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(filmCast) ? (
        <p>We don't have any information about cast for this movie</p>
      ) : (
        <>
          <ListCast>
            {filmCast.map(actor => {
              let source = '';
              if (!actor.profile_path) {
                source =
                  'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
              } else
                source = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
              return (
                <ItemCast key={actor.id}>
                  <ImgCast src={source} alt={`${actor.name}`} />
                  <TextCast>{actor.name}</TextCast>
                  <TextEm>{actor.character}</TextEm>
                </ItemCast>
              );
            })}
          </ListCast>
        </>
      )}
    </>
  );
};
export default Cast;
