import { Loader } from '../Loader/Loader';
import { Suspense , Outlet } from 'react';
import {
  BtnList,
  Header,
  IconHome,
  IconMovie,
  StyledLink,
  Wrapper,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <BtnList>
            <li>
              <StyledLink to="/">
                <IconHome />
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">
                <IconMovie /> Movies
              </StyledLink>
            </li>
          </BtnList>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default SharedLayout;