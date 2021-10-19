import {useEffect, useState} from "react";
import './App.css';

import {Cards} from "./components/Cards";
import {Header} from "./components/Header";
import {Filter} from "./components/Filter";

function App() {
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [cities, setCities] = useState([])
  const [filter, setFilter] = useState({
    city: '',
    month: ''
  })

  useEffect(() => {
    setFilteredCards([...cards])
    setCities(() => {
      const cities = cards.map(el => el.city).sort()
      const uniqCities = new Set(cities)
      return [...uniqCities]
    })
  }, [cards])

  useEffect(() => {
    console.log('fetch...')
    fetch('https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json')
      .then(res => res.json())
      .then(res => setCards(res))
      .catch((err) => console.log(err));
  }, [])

  const filterChange = (evt) => {
    setFilter((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }))
  }

  useEffect(() => {
    console.log('useEffect filter')
    const getMonth = (month) => month[3] + month[4]

    if (filter.city && filter.month) {
      setFilteredCards([...cards].filter(card => card.city === filter.city && getMonth(card.date) === filter.month))
      return
    }

    if (!filter.city && !filter.month) {
      setFilteredCards([...cards])
    }
  }, [filter, cards])

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Filter cities={cities} handleChange={filterChange} filter={filter}/>
        <Cards cards={filteredCards}/>
      </div>

    </div>
  );
}

export default App;
