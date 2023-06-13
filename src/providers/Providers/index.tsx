import { ReactNode } from 'react';

import { UserProvider } from '../UserContext';


type Props = {
  children: ReactNode;
};
const Providers = ({ children }: Props) => (
  <UserProvider>
    {children}
  </UserProvider>
);

export default Providers;
