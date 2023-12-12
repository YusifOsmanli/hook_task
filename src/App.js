import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./router/ROUTES";
import "./App.css"
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter(ROUTES)
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <Toaster/>
    </div>
  );
}

export default App;
