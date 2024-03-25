import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render component', () => {
    render(<Button variant="contained" label="btn" onClick={() => null} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick once per click event', () => {
    const handleClickMock = vi.fn();
    render(
      <Button variant="contained" label="btn" onClick={handleClickMock} />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick if button is disabled', () => {
    const handleClickMock = vi.fn();
    render(
      <Button
        variant="contained"
        label="btn"
        onClick={handleClickMock}
        disabled
      />
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClickMock).toHaveBeenCalledTimes(0);
  });

  it('should render loading text when isLoading is true', () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button variant="contained" label="btn" onClick={onClick} isLoading />
    );
    const loadingText = getByText('Loading');
    expect(loadingText).toBeInTheDocument();
  });
});
