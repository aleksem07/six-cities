import { AuthStatus } from '../../const';
import { PropsWithChildren } from 'react';

export type PrivateRouteProps = PropsWithChildren<{
  authStatus: AuthStatus;
}>;
