import {
  Route,
  Navigate,
  // useLocation,
  // useHistory,
  // Switch,
  Routes,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate replace to='/login' />}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Router;
