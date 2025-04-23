import './search-field.styles.css';

function SearchField({ onChangeHandler }) {
    return (
        <input type="search" onChange={onChangeHandler} className="search-field-container"/>
    )
}

export default SearchField;