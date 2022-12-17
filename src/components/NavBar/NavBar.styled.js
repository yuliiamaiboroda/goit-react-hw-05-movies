import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navlink = styled(NavLink)`
color: #034078;
padding: 10px;
font-size: 22px;
text-decoration: none;
font-family: 'Abel', sans-serif;
font-weight: 600;
&.active{
color: #12A3A3;
text-decoration: underline;
}

&:hover:not(.active),
:focus-visible:not(.active){
color: #12A3A3;
}

`


export const Nav = styled.nav`
display: flex;
gap: 15px;
`

export const Header = styled.header`
background-color: #CBD0F8;
padding: 20px;
box-shadow: 0px 2px 6px #001F54;
`