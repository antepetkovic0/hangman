import React from 'react';

export interface FormRowProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

const FormRow = ({ id, label, children }: FormRowProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex flex-row items-center gap-1 text-sm font-semibold"
      >
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
};

export default FormRow;
