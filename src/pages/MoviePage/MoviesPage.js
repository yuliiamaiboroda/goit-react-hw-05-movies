import {  useState } from "react"
import { fetchSearchFilms } from "services/useApi";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
    useLocation,
    useSearchParams,
  } from 'react-router-dom';
import {
    Section, Ul, Li, LinkToModal
} from './MoviePage.styled'
import SearchBox from "components/SearchBar/SearchBar";

export default function MoviePage (){
    const [filmList, setFilmList] = useState([]);

    const[searchParam, setSearchParam] =  useSearchParams();
    const nameParam= searchParam.get('query')??"";

    const location = useLocation();

    const changeQuery = value =>{
        setSearchParam(value.trim()!==""?{query:value}:{})
    }


    const onSubmitForm = e =>{
        e.preventDefault();
        if(!nameParam.trim()){
            Notify.failure("Please fill in the fields");
            return;
        }
        fetchSearchFilms(nameParam.trim()).then(({data})=>{
            if(data.results.length===0){
            Notify.failure(`Sorry, there are not films for serching ${nameParam}`);
        }
            setFilmList(data.results)});   
    }
   
    return(
        <Section>
        <SearchBox onChange={changeQuery}  onSubmitForm={onSubmitForm} value={nameParam}/>
        {filmList&& (<Ul>
            {filmList.map(({id, title})=>(<Li key={id}>
                <LinkToModal to={`${id}`} state={location} >{title}</LinkToModal>
                </Li>))} 
        </Ul>)}
        </Section>
    )
}