// import { createTheme,ThemeProvider } from '@mui/system';
import React from 'react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Routes,Route} from 'react-router-dom'
import CreateNote from './components/CreateNote';
import DisplayNotes from './components/DisplayNotes';
import { deepOrange, yellow } from '@mui/material/colors';

const myTheme = createTheme({
  palette: {
    warning: {
      main: '#ffea2d'
    },
    primary: deepOrange
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        {/* <Routes>
          <Route></Route>
        </Routes> */}
        <DisplayNotes/>
        <CreateNote/>
      </div>
    </ThemeProvider>
  );
}

export default App;
