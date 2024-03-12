import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../Common/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { RegLog, login } from '../Redux/AuthSlice'

const Login = () => {
    const initialstate = {
        
        email: "",
        password: "",
        
    }
    const { redirectToor, status } = useSelector((state) => state?.auth);
    const [user, setUser] = useState(initialstate)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const[loading,setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const onSubmitInfo = (e) => {
        e.preventDefault()
        // setLoading(true);

        let data = {
            "email": user.email,
            "password": user.password
        }
        dispatch(login(data));
        // setLoading(false);

    };

    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem("token")
            let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
            if (name !== null && name !== undefined && name !== "") {
                isInLoginPage && navigate("/services");
            }
        }

        redirectUser();
    }, [redirectToor])

    const reg = () => {
        dispatch(RegLog())
    }
    return (
        <>
            <Layout>


                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Log in</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Log in</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid position-relative bmi my-5" style={{ marginLeft: '200px' }}>
                    <div className="container">
                        <div className="row px-3 align-items-center">
                            <div className="col-md-6">
                                <div className="pr-md-3 d-none d-md-block">
                                    <h4 className="text-primary">Access with Confidence </h4>
                                    <h4 className="display-4 text-white font-weight-bold mb-4">
                                        Log In
                                    </h4>
                                    <p className="m-0 text-white">
                                        Welcome back! Your journey continues here. Enter your credentials below to access a world of possibilities.
                                        Your security is our priority, so log in with confidence. If you're new, join us and discover what awaits beyond the login screen. Your adventure begins now.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-secondary py-5">
                                <div className="py-5 px-3">
                                    <h4 className="mb-4 text-white">Unlock Your World</h4>
                                    <h1 className="mb-4 text-white">Log In</h1>
                                    <form onSubmit={onSubmitInfo}>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Email"
                                                    value={user.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Password"
                                                    value={user.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                            {status === "loading" ? 
                                
                                            (
                                                <div className="mt-2 d-flex align-items-center">
                                                    <div className="loading-box mr-2">
                                                        <span>Loading...</span>
                                                    </div>
                                                    <div className="spinner-border spinner-border-sm text-light" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            )
                                            : (<button type="submit" className="btn btn-lg btn-block btn-dark border-light">LogIn</button>)}
                                            </div>
                                        </div>
                                    </form>
                                    <p className="m-0 text-white mt-4" >Don't have an account? <Link to='/register' onClick={reg}>Register here</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login