import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
        <Footer />

        {/* restore the scroll to the top of the page when url changes */}
        {/* see ScrollRestoration in react router */}
        <ScrollRestoration
          getKey={(location) => {
            // default behavior
            return location.key;
          }}
        />
      </div>
    </>
  );
}

export default Layout;
