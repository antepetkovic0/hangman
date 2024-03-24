import { useNavigate } from 'react-router-dom';
import { IngemarkApiService } from '@api/ingemark/ingemark-api.service';
import { useAppSelector } from '@store/hooks';
import Button from '@components/core/Button/Button';
import HangmanSketch from '../HangmanSketch/HangmanSketch';
import QuoteDisplay from '../QuoteDisplay/QuoteDisplay';
import Keyboard from '../Keyboard/Keyboard';

interface GameBoardProps {
  restartGame: () => Promise<void>;
}

const GameBoard = ({ restartGame }: GameBoardProps) => {
  const navigate = useNavigate();

  const userName = useAppSelector((state) => state.user.name);

  const quoteId = useAppSelector((state) => state.quote.quote.id);
  const length = useAppSelector((state) => state.quote.quote.length);
  const uniqueCharacters = useAppSelector(
    (state) => state.quote.quote.uniqueCharacters
  );

  const status = useAppSelector((state) => state.game.status);
  const errors = useAppSelector((state) => state.game.errors);
  const gameStart = useAppSelector((state) => state.game.gameStart);
  const gameEnd = useAppSelector((state) => state.game.gameEnd);

  const handleNextClick = async () => {
    const api = new IngemarkApiService();
    await api.sendScore({
      duration: gameEnd - gameStart,
      errors,
      length,
      quoteId,
      uniqueCharacters,
      userName
    });

    navigate('/score');
  };

  switch (status) {
    case 'idle':
      return null;
    case 'inprogress':
      return (
        <div className="flex flex-col gap-8 p-8">
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
          <Button variant="contained" label="Next" onClick={handleNextClick} />
        </div>
      );
  }
};

export default GameBoard;
