import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../Common/Layout'
import { register } from '../Redux/AuthSlice';

const Register = () => {
    const [img, setImg] = useState();
    const initialValue = {
        name: "",
        email: "",
        password: "",
        phone: "",
        answer: "",
       

    }


    const { redirectTo } = useSelector((state) => state?.auth);
    // const { redirectReg, status } = useSelector((state) => state?.auth);
    const [user, setUser] = useState(initialValue);
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const validation = () => {
        let error = {}
        if (!user.name) {
            error.name = "Name is Required"
        }
        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }
        if (!user.phone) {
            error.phone = "Phone No. is Required"
        }
        if (!user.password) {
            error.password = "Password is Required"
        }
        if (!user.answer) {
            error.answer = "Answer is Required"
        }
        return error
    }

    let name, value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })


        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }
        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "Email is required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }
        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@phone is Required" })
                setUser({ ...user, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setUser({ ...user, phone: value })
            }
        }
        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "@password is Required" })
                setUser({ ...user, password: "" })
            } else {
                setError({ ...error, password: "" })
                setUser({ ...user, password: value })
            }
        }
        if (name === "answer") {
            if (value.length === 0) {
                setError({ ...error, answer: "@answer is Required" })
                setUser({ ...user, answer: "" })
            } else {
                setError({ ...error, answer: "" })
                setUser({ ...user, answer: value })
            }
        }
    }

    // const SubmitInfo = async (e) => {
    //     e.preventDefault()
    //     let ErrorList = validation()
    //     setError(validation())
    //     let formData = new FormData();
    //     if (Object.keys(ErrorList).length === 0) {
    //         formData.append("name", user.name);
    //         formData.append("email", user.email);
    //         formData.append("phone", user.phone);
    //         formData.append("password", user.password);
    //         formData.append("answer", user.answer);
    //         formData.append("image", user.image);
    //         dispatch(register(formData))
    //             .then(() => {
    //                 localStorage.setItem("name", user.name);
    //                 localStorage.setItem("email", user.email);
    //                 localStorage.setItem("phone", user.phone);
    //                 localStorage.setItem("answer", user.answer);
    //             });
    //     }
    // }
    // let e = localStorage.getItem("name")
    // console.log(e, "name")
    // const redirectUser = () => {
    //     let name = localStorage.getItem("name")
    //     let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
    //     if (name !== null && name !== undefined && name !== "") {
    //         isInLoginPage && navigate("/login");
    //     }
    // }

    const onSubmitInfo = (data) => {
        data.preventDefault()
        let ErrorList = validation()
        setError(validation())
        let formdata = new FormData()
        // if (Object.keys(ErrorList).length === 0) {

        formdata.append("name", user.name)
        formdata.append("email", user.email)
        formdata.append("password", user.password)
        formdata.append("phone", user.phone)
        formdata.append("answer", user.answer)
        formdata.append("image", img)
        dispatch(register(formdata)).then(() => {
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email);
            localStorage.setItem("phone", user.phone);
            localStorage.setItem("answer", user.answer);
        });
        
      };
    
    useEffect(() => {
        const redirectUser = () => {
            let name = localStorage.getItem("name")
            let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
            if (name !== null && name !== undefined && name !== "") {
              isInLoginPage && navigate("/login");
            }
          }
        console.log("Redirecting user...");
        redirectUser();
    }, [redirectTo]);

    return (
        <>
            <Layout>


                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Register</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Register</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid position-relative bmi my-5" style={{ marginLeft: '200px' }}>
                    <div className="container">
                        <div className="row px-3 align-items-center">
                            <div className="col-md-6">
                                <div className="pr-md-3 d-none d-md-block">
                                    <h4 className="text-primary">Join the Community </h4>
                                    <h4 className="display-4 text-white font-weight-bold mb-4">
                                        Register
                                    </h4>
                                    <p className="m-0 text-white">
                                        Embark on a new chapter by registering with us. Dive into a community where possibilities are endless.
                                        Your journey begins with a few simple steps. Sign up now to unlock exclusive benefits, connect with like-minded individuals, and elevate your experience.
                                        Let's build something incredible together. Register and become a part of our thriving community today!
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-secondary py-5">
                                <div className="py-5 px-3">
                                    <h4 className="mb-4 text-white"> Start Your Journey </h4>
                                    <h1 className="mb-4 text-white">Register Here</h1>
                                    <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={onSubmitInfo}>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                name="name"
                                                    type="text"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Name"
                                                    value={user.name}
                                                    // onChange={e => postUserData(e)}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                name="email"
                                                    type="email"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Email"
                                                    value={user.email}
                                                    // onChange={e => postUserData(e)}
                                                    onChange={postUserData}

                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                name="password"
                                                    type="password"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Password"
                                                    value={user.password}
                                                    // onChange={e => postUserData(e)}
                                                    onChange={postUserData}

                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                name="phone"
                                                    type="text"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Phone"
                                                    value={user.phone}
                                                    // onChange={e => postUserData(e)}
                                                    onChange={postUserData}

                                                />
                                            </div>
                                            <div className="col form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Answer"
                                                    name="answer"
                                                    value={user.answer}
                                                    // onChange={e => postUserData(e)}
                                                    onChange={postUserData}

                                                />
                                            </div>

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <input
                                                    type="file"
                                                    className="form-control form-control-lg bg-dark text-white"
                                                    placeholder="Image"
                                                    name="photo"
                                                    accept="image/*"
                                                    onChange={(e) => setImg(e.target.files[0])}

                                                />
                                            </div>
                                            {img !== "" && img !== undefined && img !== null ? (
                                                <img
                                                    style={{ height: "180px" }}
                                                    src={URL.createObjectURL(img)}
                                                    alt=""
                                                    className="upload-img"
                                                />
                                            ) : (
                                                <>
                                                    {img === "" && <p>Drag or drop content here</p>}
                                                </>
                                            )}

                                        </div>
                                        <div className="form-row">
                                            <div className="col">
                                            
                                                <button
                                                  
                                                    type="submit"
                                                    className="btn btn-lg btn-block btn-dark border-light"
                                                    value="Register"
                                                >Register</button>
                                                                                            </div>
                                        </div>
                                    </form>
                                    <p className="m-0 text-white mt-4" >Already have an account? <Link to='/login'>Log In</Link>
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

export default Register