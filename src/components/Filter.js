function Filter({cities, handleSubmit, handleChange, filter}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <select name='city' value={filter.city} onChange={(evt) => handleChange(evt)}>
          <option value=''>Select city</option>
          {cities.map(city =>
            <option key={city} value={city}>{city}</option>
          )}
        </select>
      </label>
      <label>
        Month:
        <select name='month' value={filter.month} onChange={(evt) => handleChange(evt)}>
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
    </form>
  )
}

export {Filter}
