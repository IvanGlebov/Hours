import React, { useEffect }               from 'react';
import './App.css';
import { useSnackbar }                    from "notistack";
import { Navbar }                         from "./components";
import { Route, Routes }                  from "react-router";
import { Goals }                          from "./pages";
import { addOneGoal }                     from "./features/goals/goalsSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getNewId }                       from "./features/goals/goalsSelectors";


function App() {

  const { enqueueSnackbar } = useSnackbar();
  const newId = useAppSelector(getNewId);
  const dispatch = useAppDispatch();

  // Adding initial store goals as a filler;
  useEffect(() => {
    dispatch(addOneGoal({ id: 1, name: "t1", description: "descr", duration: 4 }));
    dispatch(addOneGoal({ id: 2, name: "t2", description: "descr", duration: 4 }));
    dispatch(addOneGoal({ id: 3, name: "t3", description: "descr", duration: 4 }));
    dispatch(addOneGoal({ id: 4, name: "t4", description: "descr", duration: 4 }));
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Goals />} />
        <Route path='/goals' element={<div>goals</div>} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
