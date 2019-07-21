import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';

function App() {
	return (
		<React.Fragment>
			<AppNavbar />

			<div className="container">
				<Switch>
					<Route path="/" exact component={ShoppingList} />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
