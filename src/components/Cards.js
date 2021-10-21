import favorites from "../images/favorites.svg";
import favorites_selected from "../images/favorites_selected.svg";

function Cards({cards, toggleFavorites}) {
  const getDate = (date) => date[0] + date[1]

  if (!cards.length) {
    return (
      <div>Нет данных удовлетворяющих условиям!</div>
    )
  }

  return (
    <ul className='cards'>
      {cards.map(card => (
        <li key={card.id} className='cards__item'>
          <img className='cards__img' src={card.image} alt=''/>
          <p className="cards__date">{getDate(card.date)}</p>
          <h2 className="cards__title block">{card.name}</h2>
          <img
            className="cards__favorites"
            src={card.fav ? favorites_selected : favorites}
            alt=""
            onClick={() => toggleFavorites(card.id)}
          />
        </li>
      ))}
    </ul>
  )
}

export {Cards}
