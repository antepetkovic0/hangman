import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('should render component', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shoud render component with correct props', () => {
    const { getByPlaceholderText } = render(
      <Input
        id="mock-id"
        name="mock-name"
        type="text"
        placeholder="mock-placeholder"
        value="mock-value"
        onChange={() => {}}
        className="mock-class"
      />
    );

    const input = getByPlaceholderText('mock-placeholder');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'mock-id');
    expect(input).toHaveAttribute('name', 'mock-name');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('value', 'mock-value');
    expect(input).toHaveClass('mock-class');
  });

  it('should call onChange once per change event', () => {
    const handleChangeMock = vi.fn();
    render(<Input onChange={handleChangeMock} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test' }
    });

    expect(handleChangeMock).toHaveBeenCalledTimes(1);
  });
});
