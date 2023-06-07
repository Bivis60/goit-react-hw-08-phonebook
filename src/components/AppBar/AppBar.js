import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggtdIn = true;
  return (
    <header>
      <Navigation />
      {isLoggtdIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
