import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './LayoutHeader.styled';
import { SiThemoviedatabase } from 'react-icons/si';

const LayoutHeader = () => {
  return (
    <Container>
      <Header> 
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <Logo>
          Cinema<SiThemoviedatabase />
        </Logo>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default LayoutHeader;
