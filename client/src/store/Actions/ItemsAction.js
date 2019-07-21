import axios from 'axios';
import { GET_ITEMS } from '../ActionTypes/types';

export const getAllItems = () => {
	return (dispatch) => {
		axios
			.get('/api/items')
			.then((items) => {
				dispatch({
					type: GET_ITEMS,
					payload: items.data
				});
			})
			.catch((err) => console.log('err from axios getAllItems: ', err));
	};
};
