import ErrorFallback from '@components/shared/utilities/ErrorFallback/ErrorFallback';
import { fetchScores } from '@store/features/score/score-slice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useCallback, useEffect } from 'react';

const Score = () => {
  const { scores, status, error } = useAppSelector((state) => state.score);

  const dispatch = useAppDispatch();

  const getScores = useCallback(async () => {
    await dispatch(fetchScores());
  }, [dispatch]);

  useEffect(() => {
    getScores();
  }, [getScores]);

  switch (status) {
    case 'idle':
      return null;
    case 'pending':
      return <div>loading</div>;
    case 'rejected':
      return <ErrorFallback error={error} resetBoundary={getScores} />;
    case 'fulfilled':
      return (
        <div className="p-8 mx-auto">
          <table className="min-w-full bg-slate-100 shadow-md rounded my-6">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Score</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {scores.map(({ userName, score }, idx) => (
                <tr
                  key={`${idx}-${userName}`}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {idx + 1}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {userName}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
};

export default Score;
