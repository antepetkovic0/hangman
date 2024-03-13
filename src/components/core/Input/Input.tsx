import React, { ChangeEvent, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type InputType = 'text' | 'number' | 'password';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  name?: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type, placeholder, value, onChange, className }, ref) => {
    const classes = twMerge(
      'text-slate-900 px-4 py-2 rounded-sm outline-none border-2 border-indigo-500 focus:border-indigo-700',
      className
    );

    return (
      <input
        ref={ref}
        className={classes}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
