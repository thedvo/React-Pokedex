import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemonData from './pokemonData';

function App() {
	return (
		<div className="App">
			<Pokedex pokemon={pokemonData} />
		</div>
	);
}

export default App;
