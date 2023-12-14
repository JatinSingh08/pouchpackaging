import React, { ReactNode } from 'react';
import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Banner />
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
