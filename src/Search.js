import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Search.css';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { useState } from 'react';

function Search(props) {
    const [userInput, setUserInput] = useState('');

    const handleSearch = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.clickHandler(userInput);
    };
    return (
      <section className="Search">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
             <TextField id="filled-basic" onChange={handleSearch}  variant="standard" className="search-field" />
                <Button variant="contained"color="primary" type="submit" className="search-Btn"
                    startIcon={<SearchOutlinedIcon />}> Search</Button>
        </form>
      </section>
    );
  }
  
  export default Search;
  