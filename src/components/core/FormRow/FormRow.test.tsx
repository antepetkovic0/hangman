import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FormRow from './FormRow';
import Input from '../Input/Input';

describe('FormRow', () => {
  it('should render component with its children', () => {
    const labelText = 'mock-label';
    const { getByText, getByLabelText } = render(
      <FormRow id="mock-id" label={labelText}>
        <Input id="mock-id" />
      </FormRow>
    );

    const label = getByText(labelText);
    const input = getByLabelText(labelText);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'mock-id');
  });
});
