import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchQuote } from '@store/features/quote/quote-slice';

function Game() {
  const { isLoading, quote } = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  if (isLoading) return <div>loading</div>;

  return <div>{quote.content}</div>;
}

export default Game;
