import React from 'react';
import { connect } from 'react-redux';

function ShoppingList(props) {
	return (
		<ul className="collection">
			{props.AllItems.map((item) => (
				<li className="collection-item" key={item._id}>
					<div>
						{item.name}
						<a href="#!" className="secondary-content">
							<i className="material-icons">send</i>
						</a>
					</div>
				</li>
			))}
		</ul>
	);
}

const mapStateToProps = (state) => {
	return {
		AllItems: state.ItemReducer.items
	};
};

export default connect(mapStateToProps)(ShoppingList);
