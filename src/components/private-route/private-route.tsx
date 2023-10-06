import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { PrivateRouteProps } from './private-route.types';
import { AuthStatus } from '../../const';

const PrivateRoute = ({ authStatus, children }: PrivateRouteProps) =>
  authStatus === AuthStatus.Auth ? (
    children as JSX.Element
  ) : (
    <Navigate to={AppRoute.Login} replace />
  );

export default PrivateRoute;
