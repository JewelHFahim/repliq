import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";

function App() {
  return (
    <div className="bg-slate-100">
     <RouterProvider router = {router}></RouterProvider>
     <Toaster />
    </div>
  );
}

export default App;
