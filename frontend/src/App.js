import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Activate from "./containers/Activate";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import Verify from "./assets/Verify";
import Aboutme from "./containers/Aboutme";
import Chat from "./Chat";
import Adminlogin from "./containers/AdminLogin";
import DatabaseMenu from "./containers/Dbmenu";
import Dash from "./containers/Dash";
import Order from "./containers/Order";
import Pickup from "./containers/Pickup";
import Track from "./containers/Track";
import Delivery from "./containers/Delivery";
import Cate from "./containers/Cate";
import Dom from "./Categories/Dom";
import Agri from "./Categories/Agri";
import Ind from "./Categories/Ind";
import Comm from "./Categories/Comm";
import Pay from "./containers/Pay";
import Cp2 from "./containers/Cp2";
import Health from "./Categories/Health";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route excact path="/footer" element={<Footer />} />
          <Route excact path="/verify" element={<Verify />} />
          <Route excact path="/Aboutme" element={<Aboutme />} />
          <Route excact path="/Chat" element={<Chat />} />
          <Route excact path="/AdminLogin" element={<Adminlogin />} />
          <Route excact path="/Dbmenu" element={<DatabaseMenu />} />
          <Route excact path="/Dash" element={<Dash />} />
          <Route excact path="/Order" element={<Order />} />
          <Route excact path="/Userin" element={<Delivery />} />
          <Route excact path="/Track" element={<Track />} />
          <Route excact path="/Pickup" element={<Pickup />} />
          <Route excact path="/Cate" element={<Cate />} />
          <Route excact path="/Dom" element={<Dom />} />
          <Route excact path="/Agri" element={<Agri />} />
          <Route excact path="/ind" element={<Ind />} />
          <Route excact path="/Comm" element={<Comm />} />
          <Route excact path="/Health" element={<Health />} />
          <Route excact path="/Pay" element={<Pay />} />
          <Route excact path="/Cp2" element={<Cp2 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
