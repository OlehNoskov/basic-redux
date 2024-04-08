import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/userSlice";

function App() {

  // eslint-disable-next-line no-empty-pattern
  // In useSelector case (Redux) we should always clarify type of object
  const {} = useSelector((state: RootState) => state.userReducer);

  // Redux Toolkit with my hook useAppSelector
  // const {count} = useAppSelector(state => state.userReducer);

  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch();

    const count = useSelector((state: RootState) => state.userReducer.count);

  // console.log(count)

  return (
    <div className="App" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', width: '300px'}}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))} style={{marginRight: '30px'}}>INCREMENT</button>
    </div>
  );
}

export default App;
