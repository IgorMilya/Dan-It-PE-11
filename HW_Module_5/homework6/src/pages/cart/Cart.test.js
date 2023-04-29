import React from 'react';
import {render} from '@testing-library/react';
import Cart from './Cart';
import ContextProvider from "../../context";

describe('Cart', () => {
  test('renders correctly when there are no cart products', () => {
    const {container} = render(
      <ContextProvider>
        <Cart cart={[]}/>
      </ContextProvider>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render with non-empty cart', () => {
    const {container} = render(
      <ContextProvider>
        <Cart cart={[{id: 1, name: 'Product 1', price: 10}, {id: 2, name: 'Product 2', price: 20}]}/>
      </ContextProvider>
      );
    expect(container).toMatchSnapshot();
  });
});
