import { addManyCustomersAction } from "../store/customerReducer"

export default function fetchCustomers() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)))
    }
    
};
