import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export type ButtonVariant = 'outlined' | 'contained';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, label, onClick, disabled, className }, ref) => {
    const classes = twMerge(
      'flex items-center justify-center rounded-sm border-2 px-4 py-2 uppercase text-sm font-semibold outline-none',
      className,
      clsx({
        'text-slate-100 bg-indigo-500 border-indigo-500 hover:bg-indigo-700 hover:border-indigo-700 focus:bg-indigo-700 focus:border-indigo-700':
          variant === 'contained',
        'text-slate-100 bg-transparent border-indigo-500 hover:border-indigo-700 focus:border-indigo-700 outline-none':
          variant === 'outlined',
        'text-gray-500 bg-gray-300 border-none': disabled
      })
    );

    return (
      <button
        ref={ref}
        className={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
