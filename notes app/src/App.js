
import React from 'react';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as MainRouter,Routes,Route,Link} from 'react-router-dom'
import CreateNote from './pages/CreateNote';
import DisplayNotes from './pages/DisplayNotes';
import NotFound from './pages/NotFound';
import { deepOrange, yellow } from '@mui/material/colors';
import SiteLayout from './components/SiteLayout';

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
          {/* <Link to="/create">Create note</Link>
          <Link to="/">Display Notes</Link> */}
          <SiteLayout>
            <Routes>
              <Route path='/' element={<DisplayNotes/>}/>
              <Route path='/create' element={<CreateNote/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </SiteLayout>
        </MainRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
