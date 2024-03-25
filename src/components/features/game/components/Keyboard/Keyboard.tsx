import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  incrementNumberOfMisses,
  setGameEnd,
  setGuesses
} from '@store/features/game/game-slice';
import Button from '@components/core/Button/Button';
import { MAX_GAME_ERRORS } from '@constants/game';

const KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const Keyboard = () => {
  const guesses = useAppSelector((state) => state.game.guesses);
  const quoteLetters = useAppSelector(
    (state) => state.quote.quote.contentWithoutSpecialChars
  );
  const dispatch = useAppDispatch();

  const { correctLetters, incorrectLetters } = useMemo(() => {
    return guesses.reduce(
      (acc, letter) => {
        if (quoteLetters.includes(letter)) {
          acc.correctLetters.push(letter);
        } else {
          acc.incorrectLetters.push(letter);
        }

        return acc;
      },
      { correctLetters: [] as string[], incorrectLetters: [] as string[] }
    );
  }, [guesses, quoteLetters]);

  useEffect(() => {
    if (incorrectLetters.length >= MAX_GAME_ERRORS) {
      dispatch(setGameEnd('lose'));
    }

    if (quoteLetters.split('').every((letter) => guesses.includes(letter))) {
      dispatch(setGameEnd('win'));
    }
  }, [dispatch, guesses, quoteLetters, incorrectLetters]);

  const handleKeyClick = (key: string) => {
    dispatch(setGuesses(key));
    if (!quoteLetters.includes(key)) {
      dispatch(incrementNumberOfMisses());
    }
  };

  return (
    <div className="grid grid-cols-keyboard gap-3">
      {KEYS.map((key) => {
        const correctGuessedKey = correctLetters.includes(key);
        const wrongGuessedKey = incorrectLetters.includes(key);

        return (
          <Button
            className="px-2 py-1"
            key={key}
            variant="contained"
            label={key}
            onClick={() => handleKeyClick(key)}
            disabled={correctGuessedKey || wrongGuessedKey}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
