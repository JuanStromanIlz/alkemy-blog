import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const auth = localStorage.getItem('blog-warm-up');
  return auth ? children : <Navigate to='/login' />;
}