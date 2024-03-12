import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'
import About from '../Pages/About'
import Feature from '../Pages/Feature'
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import ServiceDetails from '../Components/ServiceDetails'
import Blog from '../Pages/Blog'
import BlogDetails from '../Components/BlogDetails'
import Contact from '../Pages/Contact'
import BookService from '../Components/BookService'
import { useDispatch, useSelector } from 'react-redux'
import { check_token } from '../Redux/AuthSlice'
import MemberDashboard from '../Components/MemberDashboard'


const Routing = () => {
  const dispatch = useDispatch();
  const { redirectTo } = useSelector((state) => state?.auth);



    function ProtectedRoute({ children }) {
        const token =
          localStorage.getItem("token") || sessionStorage.getItem("token");
        return token !== null && token !== undefined ? (
          children
        ) : (
          <Navigate to="/login" />
        );
      }
      useEffect(() => {
        dispatch(check_token())
      }, [redirectTo])

    // Public Route

    const PublicRoute = [
        {
            path: "/login",
            component: <Login />,
        },
        {
            path: "/register",
            component: <Register />,
        },
        {
            path: "/",
            component: <Home />,
        },
        {
            path: "/about",
            component: <About />,
        },
        {
            path: "/blog",
            component: <Blog />,
        },
       
      
        {
            path: "/features",
            component: <Feature />,
        },
        


    ];

    // Private Route

    const PrivateRoute = [
        {
            path: "/blog-details/:_id",
            component: <BlogDetails />,
        },
        {
            path: "/services-details/:_id",
            component: <ServiceDetails />,
        },
        {
            path: "/joining/:_id",
            component: <BookService />,
        },
       
        {
            path: "/contact",
            component: <Contact />,
        },
        {
            path: "/dashboard/:memberId",
            component: <MemberDashboard />,
        },
        {
            path: "/services",
            component: <Service />,
        },      

    ];
    return (
        <>
            {/* <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/about' element={<About />} />
                <Route path='/features' element={<Feature />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/services' element={<Service />} />
                <Route path='/joining/:_id' element={<BookService />} />
                <Route path='/services-details/:_id' element={<ServiceDetails />} />
                <Route path='/blog-details/:_id' element={<BlogDetails />} />
            </Routes> */}

            <Routes>
                {PublicRoute?.map((route, key) => {
                    return (
                        <>
                            <Route
                                key={key + 1}
                                path={route.path}
                                element={route.component}
                            />
                        </>
                    );
                })}
                {PrivateRoute?.map((route, key) => {
                    return (
                        <>
                            <Route
                                key={key + 1}
                                path={route.path}
                                // element={route.component}
                              element={<ProtectedRoute>{route.component}</ProtectedRoute>}
                            />
                        </>
                    );
                })}
            </Routes>
        </>
    )
}

export default Routing