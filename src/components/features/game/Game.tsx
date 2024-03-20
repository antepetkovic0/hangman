import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchQuote } from '@store/features/quote/quote-slice';
import { setGameStart } from '@store/features/game/game-slice';
import ErrorFallback from '@components/shared/utilities/ErrorFallback/ErrorFallback';
import HangmanSketch from './components/HangmanSketch/HangmanSketch';

function Game() {
  const { status, error, quote } = useAppSelector((state) => state.quote);
  const dispatch = useAppDispatch();

  const startGame = useCallback(async () => {
    await dispatch(fetchQuote());
    dispatch(setGameStart(new Date().getTime()));
  }, [dispatch]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  switch (status) {
    case 'idle':
      return null;
    case 'pending':
      return <div>loading</div>;
    case 'rejected':
      return <ErrorFallback error={error} resetBoundary={startGame} />;
    case 'fulfilled':
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
}

export default Game;
