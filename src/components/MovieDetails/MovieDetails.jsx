import { useState ,useEffect, useRef, Suspense } from 'react';
import {
  useLocation,
  useParams, Outlet
} from 'react-router-dom';
import { fetchByMovieId } from 'services/useApi';
import { Section , LinkBack, Div, Img, H2, P, B, DivAdd, Ul, LinkAdd} from './MovieDetails.styled';

export default function MovieDetails (){

const [film, setFilm] = useState(null);

const location = useLocation();
const {id: filmId} = useParams();

const locationBack = useRef(location.state)


useEffect(() => {
    filmId &&
    fetchByMovieId(filmId).then(({ data }) =>{ setFilm(data);}).catch(console.log)
  }, [filmId]);

  return (
    <Section>
      {film && <>
      {locationBack.current && <LinkBack to={`${locationBack.current.pathname}`} >BACK</LinkBack>}
        <Div>
          <Img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} width='300' />
            <div>
              <H2>{film.title}</H2> 
              <P>User score: <span>{film.vote_average.toFixed(2)}</span></P>
              <B>Overview</B>
              <P>{film.overview}</P>
              <B>Genres</B>
              <P>{film.genres.map(({name})=>( `${name} `))}</P>
            </div>
        </Div>
    <DivAdd>
    <P>Additional information</P>
    <Ul>
      <li><LinkAdd to="cast">Cast</LinkAdd></li>
      <li><LinkAdd to= "reviews">Reviews </LinkAdd></li>
    </Ul>
    </DivAdd> 
    <Suspense fallback={null}>
      <Outlet/>
    </Suspense>
    
    </>
      } 
    </Section>
  );
};


