import {useEffect, useState} from "react";
import './App.css';

import favorites from './images/favorites.svg';
import favorites_selected from './images/favorites_selected.svg';

function Header() {
  return (
    <header className="header">
      <h1 className='header__title'>Event Listing</h1>
    </header>
  )
}

function Filter() {
  return (
    <div>Filter</div>
  )
}

function Cards({cards}) {
  const getDate = (date) => date[0] + date[1]

  return (
    <ul className='cards'>
      {cards.map(card => (
        <li className='cards__item'>
          <img className='cards__img' src={card.image} alt=''/>
          <p className="cards__date">{getDate(card.date)}</p>
          <h2 className="cards__title">{card.name}</h2>
          <img className="cards__favorites" src={favorites} alt="" />
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
      .then(res => res.json())
      .then(res => setCards(res))
      .catch((err) => console.log(err));
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Filter/>
        <Cards cards={cards}/>
      </div>

    </div>
  );
}

export default App;
