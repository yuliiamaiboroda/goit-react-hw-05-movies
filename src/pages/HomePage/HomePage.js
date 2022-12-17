import { fetchTrandingFilm } from "services/useApi";
import { useEffect, useState} from "react";
import {
    useLocation,
  } from 'react-router-dom';
import { Section, H1, Ul, Li , LinkToModal} from "./HomePage.styled";

export default  function HomePage  (){
const [trandList, setTrandList ] = useState([]);
const methods = fetchTrandingFilm();

const createTrandList= async()=>{
await methods.then(({data})=>setTrandList(data.results)).catch(console.log);
}

useEffect(()=>{createTrandList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
const location = useLocation();


return (
    <Section>
    <H1>Trending Today</H1>
    <Ul>
    {trandList&& trandList.map(({id, title})=> (
    <Li key={id}>
        <LinkToModal to={`movies/${id}`} state={location} >{title}</LinkToModal>
    </Li>))}
    </Ul>
    </Section>
)

}