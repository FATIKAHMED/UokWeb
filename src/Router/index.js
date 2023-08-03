import { CircularProgress } from "@mui/material";
import * as React from "react";
import { Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
import Error404 from "../Pages/Error404";
import LocationMap from "../Components/LocationMap";
import isEmpty from "../Utils/isEmpty";
import HomeNew from "../Pages/HomeNew";

const Header = React.lazy(() => import("../Sections/Header"));
const Footer = React.lazy(() => import("../Sections/Footer"));
const FooterSocial = React.lazy(() => import("../Components/FooterSocial"));

// const Homepage = React.lazy(() => import('../Pages/Homepage'));
const Home = React.lazy(() => import("../Pages/HomeNew"));
const Gallery = React.lazy(() => import("../Pages/Gallery"));
const FindLocation = React.lazy(() => import("../Pages/FindLocation"));
const About = React.lazy(() => import("../Pages/About"));
const Partners = React.lazy(() => import("../Pages/Partners"));
const Login = React.lazy(() => import("../Pages/Login"));
const SignUp = React.lazy(() => import("../Pages/SignUp"));
const error = React.lazy(() => import("../Pages/Error404"));

// const PrivateRoute = ({ isAuthenticated }) => {
//     // const auth = false; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return isAuthenticated ? <ProtectedRoute isAuthenticated={isAuthenticated} /> : <Navigate to="/login" />;
// }

function ProtectedRoute({ isAuthenticated, path }) {
  // if (isAuthenticated === true && sessionStorage.getItem("path")) {
  //     return (
  //         <Suspense fallback={<Loader />}>
  //             <Header />
  //             <Outlet />
  //             {/* <Footer /> */}
  //             <FooterSocial />
  //         </Suspense>
  //     );
  // }
  if (isAuthenticated === true) {
    return (
      <Suspense fallback={<Loader />}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent:
              path == "/location" ? "flex-start" : "space-between",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Outlet />
          {/* <Footer /> */}
          {path !== "/location" ? <FooterSocial /> : null}
        </div>
      </Suspense>
    );
  }
  return <Navigate to="/login" />;
}

function NormalRoute({ component: Component, path, homepage }) {
  if (homepage) {
    return (
      <Suspense fallback={<Loader />}>
        <Header />
        <Component />
        <Footer />
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<Loader />}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: path == "/location" ? "flex-start" : "space-between",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Component />
        <Footer />
      </div>
    </Suspense>
  );
}
function UnAuthenticatedRoute({ component: Component, isAuthenticated }) {
  if (isAuthenticated === true && sessionStorage.getItem("path")) {
    return <Navigate to={sessionStorage.getItem("path")} />;
  } else if (isAuthenticated === true) {
    return <Navigate to="/gallery" />;
  } else {
    return (
      <Suspense fallback={<Loader />}>
        <Component />
      </Suspense>
    );
  }
}

function RouterIndex() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Homepage />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blogDetails" element={<BlogDetails />} />
                        <Route path="/location" element={<Location />} /> */}

          {/* <Route exact path='/' element={<Homepage />}/> */}

          {/* <Route exact path='/' element={<NormalRoute component={Homepage} homepage={true} path='/' />} /> */}
          {/* <Route exact path='/' element={<NormalRoute component={HomeNew} homepage={true} path='/' />} /> */}
          <Route
            exact
            path="/"
            element={<NormalRoute component={Home} homepage={true} path="/" />}
          />
          <Route
            exact
            path="/gallery"
            element={<NormalRoute component={error} path="/gallery" />}
          />
          <Route
            exact
            path="/about"
            element={<NormalRoute component={error} path="/about" />}
          />
          <Route
            exact
            path="/partners"
            element={<NormalRoute component={error} path="/partners" />}
          />
          {/* <Route exact path='/location' element={<NormalRoute component={FindLocation} />} /> */}

       
         
         
          {/* <Route exact path='/gallery' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                        <Route path='/gallery' element={<Gallery />} />
                    </Route> */}

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterIndex;
