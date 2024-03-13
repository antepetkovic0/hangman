import { Outlet } from 'react-router-dom';
import hangmanImg from '/hangman.svg';

function Layout() {
  return (
    <div className="grid grid-rows-[100px_1fr] min-h-screen">
      <div className="flex justify-between items-center p-8">
        <img src={hangmanImg} alt="hangman" width={24} />
        <div className="font-semibold">The Hangman</div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
