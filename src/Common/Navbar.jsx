import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LogoutUser } from '../Redux/AuthSlice';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { LogoutToggle } = useSelector((state) => state?.auth);
    const name = localStorage.getItem("name");
    const token = localStorage.getItem("token");
    const proimg = localStorage.getItem("image")
    console.log(proimg, "image")

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logOut = (e) => {
        e.preventDefault()
        dispatch(LogoutUser())
        navigate("/login")
        // toast.success("Loggedout Successfully")
    }

    return (
        <>
            <div className="container-fluid p-0 nav-bar ">
                <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3 ">
                    <Link to="/" className="navbar-brand">
                        <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">SweatSmart</h1>
                    </Link>
                    <i className="flaticon-barbell display-4 text-primary" />

                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto p-4 bg-secondary">
                            <NavLink to="/" className="nav-item nav-link " >Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link" >About Us</NavLink>
                            <NavLink to="/features" className="nav-item nav-link">Our Features</NavLink>
                            <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                            {/* <Link to="/login" className="nav-item nav-link">Member Login</Link> */}
                            <NavLink to="/blog" className="nav-item nav-link">Blogs</NavLink>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            {LogoutToggle ? (
                                <>
                                <div className="nav-item dropdown">
                                <NavLink href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Welcome Member</NavLink>
                                <div className="dropdown-menu text-capitalize">
                                <Link className="dropdown-item" to={`/dashboard/${localStorage.getItem('_id')}`}>{name}</Link>
                                <Link className="dropdown-item" style={{ textDecoration: "none" }} onClick={logOut}>Logout <i className="fas fa-sign-out-alt"></i></Link>
                                </div>
                            </div>
                                    {/* <span className="nav-item nav-link" ><img src={`http://localhost:7700/${proimg}`} height="30px"/></span> */}
                                    {/* <span className="nav-item nav-link"><Link to="/dashboard">Hi {name}</Link></span> */}
                                    {/* <span className="nav-item nav-link" onClick={logOut}><Link style={{ textDecoration: "none" }}>Logout</Link></span> */}
                                    
                                </>
                            ) : (
                                <Link to="/login" className="nav-item nav-link">Member Login</Link>
                            )}
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu text-capitalize">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                                    <a href="single.html" className="dropdown-item">Meal Tips</a>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
