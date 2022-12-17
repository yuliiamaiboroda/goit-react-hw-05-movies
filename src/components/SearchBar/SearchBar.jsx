import { Form, Input, Button } from "./SearchBar.styled"
import PropTypes from 'prop-types';


export default function SearchBox  ({onChange, onSubmitForm, value}){
 return(   <Form onSubmit={onSubmitForm}>
    <Input type='text' name='searchFilm' placeholder="Search film" required autoFocus value={value}  onChange={(e)=>{onChange(e.target.value.toLowerCase())}}/>
    <Button>Search</Button>
    </Form>)

}

SearchBox.propTypes= {
    onChange:PropTypes.func.isRequired,
    onSubmitForm:PropTypes.func.isRequired,
    value:PropTypes.string
}