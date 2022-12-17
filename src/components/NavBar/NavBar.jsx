import { Navlink , Nav, Header} from './NavBar.styled';

export default function NavBar(){
    return(
        <Header>
        <Nav>
            <Navlink to='/'>Home</Navlink>
            <Navlink to='/movies'>Movies</Navlink>
        </Nav>
        </Header>
    )
}