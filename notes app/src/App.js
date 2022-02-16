
import React from 'react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as MainRouter,Routes,Route,Link} from 'react-router-dom'
import CreateNote from './components/CreateNote';
import DisplayNotes from './components/DisplayNotes';
import NotFound from './components/NotFound';
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
        <MainRouter>
          <Link to="/create">Create note</Link>
          <Link to="/">Display Notes</Link>
          <Routes>
            <Route path='/' element={<DisplayNotes/>}/>
            <Route path='/create' element={<CreateNote/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </MainRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
