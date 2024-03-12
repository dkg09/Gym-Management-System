import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Common/Layout'
import Trainer from '../Components/Trainer'

const About = () => {
    return (
        <>
            <Layout>

                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">About Us</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">About Us</p>
                        </div>
                    </div>
                </div>


                {/* About start */}
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid mb-4 mb-lg-0" src="img/about4.jpg" alt="Image" style={{height:'450px'}} />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 font-weight-bold mb-4">10 Years Experience</h2>
                            <p>With a rich 10-year background, I bring extensive experience, honed skills, and a deep understanding to deliver exceptional results consistently.</p>
                            <div className="row py-2">
                                <div className="col-sm-6">
                                    <i className="flaticon-barbell display-2 text-primary"></i>
                                    <h4 className="font-weight-bold">Certified GYM Center</h4>
                                    <p>Certified gym center committed to your fitness and well-being goals.</p>
                                </div>
                                <div className="col-sm-6">
                                    <i className="flaticon-medal display-2 text-primary"></i>
                                    <h4 className="font-weight-bold">Award Winning</h4>
                                    <p>Recognized for excellence, we are an award-winning destination for fitness.</p>
                                </div>
                            </div>
                            <Link to="/blog" className="btn btn-lg px-4 btn-outline-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
                {/* About end */}

                {/* Feature Start */}
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
                                <i className="flaticon-training display-3 text-primary mr-3"></i>
                                <div>
                                    <h2 className="text-white mb-3">Progression</h2>
                                    <p>
                                        Fitness, strength, endurance, health, transformation, dedication, discipline, vitality, wellness, lifestyle.                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-primary text-white px-5" style={{ minHeight: '300px' }}>
                                <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                                <div>
                                    <h2 className="text-white mb-3">Workout</h2>
                                    <p>
                                        Transform, strengthen, sweat, challenge, discipline, health, endurance, vitality, motivation, achievement
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0">
                            <div className="d-flex align-items-center bg-secondary text-white px-5" style={{ minHeight: '300px' }}>
                                <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                                <div>
                                    <h2 className="text-white mb-3">Nutrition</h2>
                                    <p>
                                        Essential for muscle growth, gym nutrition fuels workouts, aids recovery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End */}




                <Trainer />
            </Layout>
        </>
    )
}

export default About