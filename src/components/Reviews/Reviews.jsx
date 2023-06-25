import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { getReviewsMovies } from 'API';
import {
  ItemReviews,
  ListReviews,
  TextP,
  TextAuthor,
  TextContent,
} from './Reviews.styled';


const Reviews = () => {
  const { movieId } = useParams();

  const [filmReviews, setFilmReviews] = useState([]);

  useEffect(() => {
    try {
      getReviewsMovies(movieId).then(res => setFilmReviews(res.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <>
      {isEmpty(filmReviews) ? (
        <TextP>We don't have any reviews for this movie</TextP>
      ) : (
        <ListReviews>
          {filmReviews.map(review => {
            return (
              <ItemReviews key={review.id}>
                <TextAuthor>{review.author}</TextAuthor>
                <TextContent>{review.content}</TextContent>
              </ItemReviews>
            );
          })}
        </ListReviews>
      )}
    </>
  );
};

export default Reviews;
