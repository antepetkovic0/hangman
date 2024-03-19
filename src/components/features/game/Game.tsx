import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchQuote } from '@store/features/quote/quote-slice';
import HangmanSketch from './components/HangmanSketch/HangmanSketch';

function Game() {
  const { isLoading, quote } = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (isLoading) return <div>loading</div>;

  return (
    <div>
      <div>{quote.content}</div>
      <div
        style={{
          display: 'flex'
        }}
      >
        <HangmanSketch numberOfMisses={6} />
      </div>
    </div>
  );
}

export default Game;
