import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import { getAllItems } from './store/Actions/ItemsAction';
import { connect } from 'react-redux';

class App extends React.Component {
	componentDidMount() {
		this.props.getAllItems();
	}

	render() {
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
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllItems: () => dispatch(getAllItems())
	};
};

export default connect(null, mapDispatchToProps)(App);
