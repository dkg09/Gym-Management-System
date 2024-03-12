import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Common/Layout'
import Testimonial from '../Components/Testimonial'

const Feature = () => {
    return (
        <>
            <Layout>

                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Our Features</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Our Features</p>
                        </div>
                    </div>
                </div>




                {/* <!-- GYM Feature Start --> */}
                <div className="container feature pt-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Why Choose Us?</h4>
                        <h4 className="display-4 font-weight-bold">Benefits of Joining Our GYM</h4>
                    </div>
                    <div className="row">
                        {/* Feature 1 */}
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-1.jpg" alt="Image" />
                                    <i className="flaticon-barbell"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Videos Instruction</h4>
                                    <p>Engaging video tutorials enhance workouts, providing step-by-step guidance for effective exercise routines and techniques.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-2.jpg" alt="Image" />
                                    <i className="flaticon-training"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Training Calendar</h4>
                                    <p>A structured training calendar optimizes fitness routines, offering planned schedules for diverse and targeted workouts.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-3.jpg" alt="Image" />
                                    <i className="flaticon-trends"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                                    <p>Access free fitness apps and WiFi to seamlessly connect, monitor progress, and stay motivated during workouts.</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="col-md-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="img/feature-4.jpg" alt="Image" />
                                    <i className="flaticon-support"></i>
                                </div>
                                <div className="col-sm-7">
                                    <h4 className="font-weight-bold">Community Support</h4>
                                    <p>Foster a sense of belonging with community support, where members inspire, motivate, and share experiences for collective growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- GYM Feature End --> */}

                <Testimonial />
            </Layout>
        </>
    )
}

export default Feature