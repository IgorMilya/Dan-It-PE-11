import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './modal';

describe('Modal', () => {
  test('renders with correct header text and subtext', () => {
    const headerText = 'Modal Header';
    const subText = 'Modal subtext';
    const { getByText } = render(<Modal header={headerText} subText={subText} isOpened={true} />);

    expect(getByText(headerText)).toBeInTheDocument();
    expect(getByText(subText)).toBeInTheDocument();
  });

  test('renders with actions', () => {
    const actions = <button>Button</button>;
    const { getByText } = render(<Modal actions={actions} isOpened={true} />);

    expect(getByText('Button')).toBeInTheDocument();
  });

  test('clicking the close button calls the closeButton prop function', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Modal closeButton={onClose} isOpened={true} />);

    fireEvent.click(getByTestId('close-button'));
    expect(onClose).toHaveBeenCalled();
  });
});
