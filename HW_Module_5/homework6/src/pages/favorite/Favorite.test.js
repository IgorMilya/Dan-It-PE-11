import React from "react";
import { render } from "@testing-library/react";
import Favorite from "./Favorite";

describe("Favorite component", () => {
  test('renders correctly when there are favorite products', () => {
    const favorite = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
    ];
    const { container } = render(<Favorite favorite={favorite} />);
    expect(container).toMatchSnapshot();
  });

  test('renders correctly when there are no favorite products', () => {
    const { container } = render(<Favorite favorite={[]} />);
    expect(container).toMatchSnapshot();
  });

});
