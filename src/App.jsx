import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BottomBar from "./components/BottomBar";
import Menu from "./pages/Menu";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md m-auto min-h-screen bg-technopartner">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:route" element={<Menu />} />
            <Route
              path="*"
              element={
                <h1 className="text-center text-red-900 mt-10">
                  404 Not Found
                </h1>
              }
            />
          </Route>
        </Routes>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
