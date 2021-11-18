import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/utilities/GlobalStyles';
import PrivateRoute from 'components/elements/PrivateRoute';
import Theme from 'components/utilities/Theme';
import Home from 'pages/Home';
import Login from 'pages/Login';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
