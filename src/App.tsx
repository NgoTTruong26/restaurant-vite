import { router } from "config/router";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "redux/app/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
