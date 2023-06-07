import { router } from "configs/router";

import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import useCheckAuth from "modules/auth/hooks/useCheckAuth";

// Create a client

function App() {
  useCheckAuth();

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
