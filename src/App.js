import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/utilities/GlobalStyles';
import PrivateRoute from 'components/elements/PrivateRoute';
import Theme from 'components/utilities/Theme';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NewPost from 'pages/NewPost';
import DetailPost from 'pages/DetailPost';
import Error from 'pages/Error';
import { AlertProvider } from 'context/AlertContext';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AlertProvider>
        <Router>
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path='/post/new' element={
              <PrivateRoute>
                <NewPost />
              </PrivateRoute>
            } />
            <Route path='/post/:id' element={
              <PrivateRoute>
                <DetailPost />
              </PrivateRoute>
            } />
          </Routes>
        </Router>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
