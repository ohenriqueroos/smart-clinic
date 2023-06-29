import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Container from "../components/Container/Container";

const RootPage = () => {
  return (
    <>
      <Menu>
        <Container>
          <Outlet />
        </Container>
      </Menu>
    </>
  );
};

export default RootPage;
