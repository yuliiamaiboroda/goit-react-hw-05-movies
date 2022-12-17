import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
padding: 20px;
padding-bottom: 0;
`
export const Ul = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 5px;
padding: 0;
margin: 0;
padding-top: 20px;
`

export const Li = styled.li`
font-family: 'Abel', sans-serif;
`

export const LinkToModal = styled(Link)`
font-size: 18px;
text-decoration: none;
color:#034078;
:hover,
:focus{
    color: #0DA2A2;
}
`