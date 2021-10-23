import {useEffect, useState} from "react";
import './App.css';

import {Cards} from "../Cards/Cards";
import {Header} from "../Header/Header";
import {Filter} from "../Filter/Filter";

function App() {
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [cities, setCities] = useState([])
  const [filter, setFilter] = useState({
    city: '',
    month: '',
    fav: false
  })

  useEffect(() => {
    setCities(() => {
      const cities = cards.map(el => el.city).sort()
      const uniqCities = new Set(cities)
      return [...uniqCities]
    })
  }, [cards])

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('fav')) || []
    fetch('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
      .then(res => res.json())
      .then(res => setCards(
        res.map((c) => {
          c.fav = fav.includes(c.id);
          return c
        })
      ))
      .catch((err) => console.log(err));
  }, [])

  const filterChange = (evt) => {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFilter((state) => ({
      ...state,
      [name]: value,
    }))
  }

  useEffect(() => {
    const getMonth = (date) => date[3] + date[4]

    setFilteredCards([...cards].filter(card => {
      return (!!filter.city ? card.city === filter.city : true)
        && (!!filter.month ? getMonth(card.date) === filter.month : true)
        && (filter.fav ? card.fav : true)
    }))
  }, [filter, cards])

  const toggleFavorites = (id) => {
    setCards((state) => {
        const newState = state.map((c) => {
          if (c.id === id) {
            return {...c, fav: !c.fav}
          }
          return c
        })
        saveFav(newState)
        return newState
      }
    )
  }

  const saveFav = (arr) => {
    const favId = arr.filter(el => el.fav).map(el => el.id)
    localStorage.setItem('fav', JSON.stringify(favId));
  }

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Filter cities={cities} handleChange={filterChange} filter={filter}/>
        <Cards cards={filteredCards} toggleFavorites={toggleFavorites}/>
      </div>
    </div>
  );
}

export default App;
