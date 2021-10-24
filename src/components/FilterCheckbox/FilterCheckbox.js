import './FilterCheckbox.css';

function FilterCheckbox({title, dispatchFilter, filter}) {
  return (
    <div>
      <label className="switcher">
        <input
          className="switcher__input"
          type="checkbox"
          name="fav"
          onChange={() => dispatchFilter({type: 'fav'})}
          checked={filter.fav}
        />
        <span className="switcher__span"/>
      </label>
      <span>{title}</span>
    </div>
  );
}

export default FilterCheckbox;
