import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchQuote } from '@store/features/quote/quote-slice';
import { setGameStart } from '@store/features/game/game-slice';
import ErrorFallback from '@components/shared/utilities/ErrorFallback/ErrorFallback';
import HangmanSketch from './components/HangmanSketch/HangmanSketch';
import QuoteDisplay from './components/QuoteDisplay/QuoteDisplay';
import Keyboard from './components/Keyboard/Keyboard';

function Game() {
  const { status, error } = useAppSelector((state) => state.quote);
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
          <div className="flex flex-col gap-2">
            <div
              style={{
                display: 'flex'
              }}
            >
              <HangmanSketch />
            </div>
            <QuoteDisplay />
            <Keyboard />
          </div>
        </div>
      );
  }
}

export default Game;
