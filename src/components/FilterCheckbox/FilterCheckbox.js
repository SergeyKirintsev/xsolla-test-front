import './FilterCheckbox.css';

function FilterCheckbox({title, handleChange, filter}) {
  return (
    <div>
      <label className="switcher">
        <input
          className="switcher__input"
          type="checkbox"
          name="fav"
          onChange={handleChange}
          checked={filter.fav}
        />
        <span className="switcher__span"/>
      </label>
      <span>{title}</span>
    </div>
  );
}

export default FilterCheckbox;
