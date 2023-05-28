import Header from "components/Header/nav";
import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
      <>
            <Header />
            <Outlet />
      </>
    );
}

export default Layout;