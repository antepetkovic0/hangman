import { SerializedError } from '@reduxjs/toolkit';
import Button from '@components/core/Button/Button';

interface ErrorFallbackProps {
  error?: SerializedError;
  resetBoundary: () => Promise<void>;
}

const ErrorFallback = ({ error, resetBoundary }: ErrorFallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong</p>
      {error?.message && <pre>{error.message}</pre>}
      <Button label="Try again" variant="contained" onClick={resetBoundary} />
    </div>
  );
};

export default ErrorFallback;
