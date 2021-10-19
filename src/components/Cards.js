import favorites from "../images/favorites.svg";

function Cards({cards}) {
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
          <h2 className="cards__title">{card.name}</h2>
          <img className="cards__favorites" src={favorites} alt="" />
        </li>
      ))}
    </ul>
  )
}

export {Cards}
