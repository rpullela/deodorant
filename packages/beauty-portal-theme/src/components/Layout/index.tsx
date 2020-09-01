import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Footer from '../Footer';
import PageSchema from '../PageSchema';
import './styles.scss';
import AuthContext from 'src/contexts/AuthContext';

const Layout = ({ className, children }: LayoutProps) => {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <a href="#main" className="bp-skipLink">
        <span>Skip to content</span>
      </a>
      <Header />
      <PageSchema type={'WebSite'} />
      <main
        id="main"
        aria-label="Main Content"
        className={classNames('bp-page', className === 'home' ? 'p0' : null)}
      >
        {children}
      </main>
      <Footer />
    </AuthContext.Provider>
  );
};

export default Layout;

interface LayoutProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}
