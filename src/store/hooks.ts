import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispacth } from './store';

export const useAppDispatch = () => useDispatch<AppDispacth>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
