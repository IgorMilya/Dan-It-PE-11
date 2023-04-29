import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MyPhoneInput } from "./MyPhoneInput";

describe("MyPhoneInput", () => {
  const props = {
    errors: {},
    touched: {},
    handleBlur: jest.fn(),
    values: {
      phoneNumber: "",
    },
    setFieldValue: jest.fn(),
  };

  test("renders without errors", () => {
    const { getByRole } = render(<MyPhoneInput {...props} />);
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  test("changes input value on user input", () => {
    const { getByRole } = render(<MyPhoneInput {...props} />);
    const input = getByRole("textbox");

    fireEvent.change(input, { target: { value: "1234567890" } });

    expect(props.setFieldValue).toHaveBeenCalledWith("phoneNumber", "1234567890");
    expect(input.value).toBe("+1 (234) 567-890");
  });

  test("displays error text when there's an error", () => {
    const propsWithError = {
      ...props,
      errors: {
        phoneNumber: "Invalid phone number",
      },
      touched: {
        phoneNumber: true,
      },
    };

    const { getByText } = render(<MyPhoneInput {...propsWithError} />);
    expect(getByText("Invalid phone number")).toBeInTheDocument();
  });
});
