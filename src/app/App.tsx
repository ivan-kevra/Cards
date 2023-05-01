import { Counter } from "features/counter/Counter";
import React, { useEffect } from "react";
import "app/App.css";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appActions } from "app/app.slice";

export const App = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loader...</h1>}
      <Counter />
    </div>
  );
};
