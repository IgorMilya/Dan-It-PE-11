import {CUSTOMER} from "../types"

export const removeCustomerAction = (name) => ({
  type: CUSTOMER.REMOVE_CUSTOMER,
  payload: {id: name.id}
})

export const addCustomerAction = (customer) => ({
  type: CUSTOMER.ADD_CUSTOMER,
  payload: {customer}
})

const addManyCustomerAction = (customer) => ({
  type: CUSTOMER.ADD_MANY_CUSTOMERS,
  payload: {customer}
})

export const addManyCustomerAsyncAction = () => {
  return async (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomerAction(json)))
  }
}