import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

// Use type selector for knowing all fields during coding
export const useAppSelector: TypedUseSelectorHook<RootState> = () => useSelector;