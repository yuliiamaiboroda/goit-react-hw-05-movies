import { useEffect , useState} from "react";
import {useParams}  from 'react-router-dom';
import { fetchReviewsOfMovie } from "services/useApi";
import { Ul , Li, Span, P} from "./Reviews.styled";

export default function Reviews (){
const [reviews, setReviwes] = useState(null);
const {id: filmId} = useParams();


useEffect(()=>{
filmId&&fetchReviewsOfMovie(filmId).then(({data})=>{setReviwes(data.results)}).catch(console.log)
}, [filmId])

return (
   <>
   {reviews && reviews.length>0 ?
   <Ul>
        {reviews.map(el=>(
            <Li key={el.id}>
                <p>Author: <Span>{el.author}</Span></p>
                <p>Review</p>
                <Span>{el.content}</Span>
            </Li>
        ))}
        </Ul>: <P>No reviews yet</P>
   }
   </>
)
}