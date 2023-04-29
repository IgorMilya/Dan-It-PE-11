import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';
import ContextProvider from "../../context";

describe('ProductList component', () => {
  it('should render correctly', () => {
    const component = render(
    <ContextProvider>
      <ProductList />
    </ContextProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
