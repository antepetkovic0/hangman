import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export type ButtonVariant = 'outlined' | 'contained';

const BUTTON_VARIANT_MAPS: Record<ButtonVariant, string> = {
  contained:
    'text-slate-100 bg-indigo-500 border-indigo-500 hover:bg-indigo-700 hover:border-indigo-700 focus:bg-indigo-700 focus:border-indigo-700',
  outlined:
    'text-slate-100 bg-transparent border-indigo-500 hover:border-indigo-700 focus:border-indigo-700'
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, label, onClick, disabled, isLoading, className }, ref) => {
    const finalDisabled = !!disabled || !!isLoading;

    const classes = twMerge(
      'flex items-center justify-center rounded-sm border-2 px-4 py-2 uppercase text-sm font-semibold outline-none',
      BUTTON_VARIANT_MAPS[variant],
      className,
      clsx({
        'text-gray-500 bg-gray-300 border-gray-300 hover:bg-gray-300 hover:border-gray-300':
          finalDisabled
      })
    );

    const content = isLoading ? 'Loading' : label;

    return (
      <button
        ref={ref}
        className={classes}
        onClick={onClick}
        disabled={finalDisabled}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
