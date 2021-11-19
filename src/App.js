import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/utilities/GlobalStyles';
import PrivateRoute from 'components/elements/PrivateRoute';
import Theme from 'components/utilities/Theme';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NewPost from 'pages/NewPost';
import EditPost from 'pages/EditPost';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/new' element={
            <PrivateRoute>
              <NewPost />
            </PrivateRoute>
          } />
          <Route path='/edit/:id' element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
