import React, { useEffect } from 'react';
import './App.css';
import { useSnackbar }      from "notistack";
import { Navbar }           from "./components";
import { Route, Routes }    from "react-router";
import { Goals }           from "./pages";


function App() {

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
      enqueueSnackbar("text", {variant:"success"})
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
