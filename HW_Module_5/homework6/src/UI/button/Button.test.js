import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import Button from './button'

describe('Button', () => {
  test('renders with the correct text', () => {
    const buttonText = 'Click me'
    const { getByText } = render(<Button text={buttonText} />)
    expect(getByText(buttonText)).toBeInTheDocument()
  })

  test('calls the onClick function when clicked', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<Button onClick={handleClick} />)
    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('adds the className to the button element', () => {
    const className = 'my-class'
    const { getByRole } = render(<Button className={className} />)
    const button = getByRole('button')
    expect(button).toHaveClass(className)
  })
  test('adds the backgroundColor class to the button element', () => {
    const backgroundColor = 'primary'
    const { getByRole } = render(<Button backgroundColor={backgroundColor} />)
    const button = getByRole('button')
    expect(button).toHaveClass(backgroundColor)
  })
})
