import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Downloads from './components/Downloads';
import Layout from './components/Layout';
import {createTheme, ThemeProvider} from '@mui/material'
import { pink, grey } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: pink,
    success: grey
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightBold: 700,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/downloads' element={<Downloads/>} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
