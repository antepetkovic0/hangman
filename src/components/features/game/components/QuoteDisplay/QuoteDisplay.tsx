import { useAppSelector } from '@store/hooks';
import { isLetter } from '@utils/quote.utils';

const QuoteDisplay = () => {
  const quote = useAppSelector((state) => state.quote.quote.content);
  const guesses = useAppSelector((state) => state.game.guesses);

  return (
    <div className="flex flex-wrap gap-3 ">
      {quote.split('').map((char, index) => {
        if (isLetter(char)) {
          return (
            <span
              className="flex justify-center w-3 border-b-2 border-solid border-slate-100"
              key={index}
            >
              <span
                className={`font-semibold ${guesses.includes(char) ? 'visible' : 'invisible'}`}
              >
                {char}
              </span>
            </span>
          );
        } else {
          return (
            <span key={index} className="font-semibold">
              {char}
            </span>
          );
        }
      })}
    </div>
  );
};

export default QuoteDisplay;
