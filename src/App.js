import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Signup from "./pages/signup/Signup";
import Estatelist from "./pages/Estatelist/Estatetlist";
import Productlist from "./pages/productlistt/Productlist";
import New from "./pages/new/New";
import NewEstate from "./pages/new estate/NewEstate";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { EstateInputs, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import Orderlist from "./pages/Orderlist/Ordertlist";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* auth */}
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            {/* users */}
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId" 
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            {/* product */}
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <Productlist />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="estates">
              <Route
                index
                element={
                  <RequireAuth>
                    <Estatelist />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              
              <Route
                path="newestate"
                element={
                  <RequireAuth>
                    <NewEstate inputs={EstateInputs} title="Add New Estate"/>

                  </RequireAuth>
                }
              />
            </Route>
            {/* order */}
          </Route>
          <Route path="orders">
              <Route
                index
                element={
                  <RequireAuth>
                      <Orderlist />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              
              <Route
                path="newestate"
                element={
                  <RequireAuth>
                    <NewEstate inputs={EstateInputs} title="Add New Estate"/>

                  </RequireAuth>
                }
              />
            </Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
