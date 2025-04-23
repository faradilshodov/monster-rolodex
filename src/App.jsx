import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchField from './components/search-field/search-field.component';
import './App.css';

function App() {
    const [monsters, setMonster] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setMonster(data);
                setFilteredMonsters(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchString);
        });
        setFilteredMonsters(filteredMonsters);
    };

    return (
        <div className="app-container">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchField onChangeHandler ={onSearchChange} />
            <CardList monsters={filteredMonsters} />
        </div>
    )
}

export default App
