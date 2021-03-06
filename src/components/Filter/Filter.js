import './Filter.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Filter({cities, handleSubmit, handleChange, filter}) {
  return (
    <form onSubmit={handleSubmit} className='filter__form'>
      <div>
        <label className='filter__label'>
          City:
          <select name='city' value={filter.city} onChange={handleChange}>
            <option value=''>Select city</option>
            {cities.map(city =>
              <option key={city} value={city}>{city}</option>
            )}
          </select>
        </label>
        <label className='filter__label'>
          Month:
          <select name='month' value={filter.month} onChange={handleChange}>
            <option value=''>Select month</option>
            <option value='01'>January</option>
            <option value='02'>February</option>
            <option value='03'>March</option>
            <option value='04'>April</option>
            <option value='05'>May</option>
            <option value='06'>June</option>
            <option value='07'>July</option>
            <option value='08'>August</option>
            <option value='09'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </label>
      </div>
      <FilterCheckbox title='Избранное' handleChange={handleChange} filter={filter}/>
    </form>
  )
}

export {Filter}
