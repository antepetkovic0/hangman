import { useAppSelector } from '@store/hooks';
import Button from '@components/core/Button/Button';
import HangmanSketch from '../HangmanSketch/HangmanSketch';
import QuoteDisplay from '../QuoteDisplay/QuoteDisplay';
import Keyboard from '../Keyboard/Keyboard';

interface GameBoardProps {
  restartGame: () => Promise<void>;
}

const GameBoard = ({ restartGame }: GameBoardProps) => {
  const status = useAppSelector((state) => state.game.status);

  switch (status) {
    case 'idle':
      return null;
    case 'inprogress':
      return (
        <div className="flex flex-col gap-8 p-4 md:p-8">
          <div className="flex justify-center">
            <HangmanSketch />
          </div>
          <QuoteDisplay />
          <Keyboard />
          <Button variant="outlined" label="Restart" onClick={restartGame} />
        </div>
      );
    case 'lose':
      return (
        <div className="flex flex-col justify-center items-center gap-4">
          <h3>Oops, you lost!</h3>
          <Button variant="contained" label="Try again" onClick={restartGame} />
        </div>
      );
    case 'win':
      return (
        <div className="flex flex-col justify-center items-center gap-4">
          <h3>Congratulations, you won!</h3>
          <Button variant="contained" label="New game" onClick={restartGame} />
        </div>
      );
  }
};

export default GameBoard;
