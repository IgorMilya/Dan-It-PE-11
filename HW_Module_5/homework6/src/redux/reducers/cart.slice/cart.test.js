import cartReducer, {addCartProduct, removeCartProduct, removeAllCartProduct, emptyCart} from './cart.slice';

describe('cartSlice', () => {
  const initialState = {
    data: []
  };

  test('should handle adding a product to the cart', () => {
    const product = {id: 1, name: 'Product 1', price: 10};
    const nextState = cartReducer(initialState, addCartProduct(product));

    expect(nextState.data).toEqual([product]);
  });

  test('should handle removing a product from the cart', () => {
    const product1 = {id: 1, name: 'Product 1', price: 10};
    const product2 = {id: 2, name: 'Product 2', price: 20};
    const initialState = {data: [product1, product2]};
    const indexToRemove = 1;

    const nextState = cartReducer(initialState, removeCartProduct({index: indexToRemove}));

    expect(nextState.data).toEqual([product1]);
  });

  test('should handle removing all products with a specific id from the cart', () => {
    const product1 = {id: 1, name: 'Product 1', price: 10};
    const product2 = {id: 2, name: 'Product 2', price: 20};
    const product21 = {id: 2, name: 'Product 2', price: 20};
    const product3 = {id: 3, name: 'Product 3', price: 30};
    const initialState = {data: [product1, product2, product21, product3]};
    const idToRemove = 2;

    const nextState = cartReducer(initialState, removeAllCartProduct({id: idToRemove}));

    expect(nextState.data).toEqual([product1, product3]);
  });

  test('should handle emptying the cart', () => {
    const product1 = {id: 1, name: 'Product 1', price: 10};
    const product2 = {id: 2, name: 'Product 2', price: 20};
    const initialState = {data: [product1, product2]};

    const nextState = cartReducer(initialState, emptyCart());

    expect(nextState.data).toEqual([]);
  });
});
