import { useState } from 'react';
import Nav from './Nav';
import Search from './Search';
import Display from './Display';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');

  const onSearchBtnClicked = (userInput) => {
    setSearchText(userInput);
    console.log('Search button clicked', userInput);
  };

  return (
    <section className="App">
      <Nav />
      <section className="search"> <Search clickHandler={onSearchBtnClicked} /></section>
      <section className="display"> <Display userInput={searchText}/></section>
    </section>
  );
}

export default App;
