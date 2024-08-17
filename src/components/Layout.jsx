import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{marginTop : "2rem"}}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
