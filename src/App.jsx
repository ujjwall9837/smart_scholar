import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { UpdatePassword } from "./pages/UpdatePassword";
import { VerifyEmail } from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import MyProfile from "./components/core/Dashboard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/index";
import AddCourse from "./components/core/Dashboard/AddCourse";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}>
          {" "}
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/update-password/:id"
          element={<UpdatePassword></UpdatePassword>}
        ></Route>
        <Route
          path="/verify-email"
          element={<VerifyEmail></VerifyEmail>}
        ></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route
            path="dashboard/enrolled-courses"
            element={<EnrolledCourses />}
          />
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
        </Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
