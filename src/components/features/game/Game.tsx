import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchQuote } from '@store/features/quote/quote-slice';
import { setGameStart } from '@store/features/game/game-slice';
import Spinner from '@components/core/Spinner/Spinner';
import ErrorFallback from '@components/shared/utilities/ErrorFallback/ErrorFallback';
import GameBoard from './components/GameBoard/GameBoard';

function Game() {
  const quoteStatus = useAppSelector((state) => state.quote.status);
  const quoteError = useAppSelector((state) => state.quote.error);

  const dispatch = useAppDispatch();

  const startGame = useCallback(async () => {
    await dispatch(fetchQuote());
    dispatch(setGameStart());
  }, [dispatch]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  switch (quoteStatus) {
    case 'idle':
      return null;
    case 'pending':
      return (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      );
    case 'rejected':
      return (
        <div className="place-content-center">
          <ErrorFallback error={quoteError} resetBoundary={startGame} />
        </div>
      );
    case 'fulfilled':
      return <GameBoard restartGame={startGame} />;
  }
}

export default Game;
