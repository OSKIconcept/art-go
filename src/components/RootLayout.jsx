import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="-tracking-tighter">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
