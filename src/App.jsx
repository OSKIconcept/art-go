import { RouterProvider } from "react-router-dom";
import routes from "./router";

//Smooth scrolling
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
