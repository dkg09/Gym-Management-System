import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchHomeData } from '../Redux/HomeSlice';
import Layout from '../Common/Layout';

import { Link } from 'react-router-dom';
import Trainer from '../Components/Trainer';
import Testimonial from '../Components/Testimonial';


const Home = () => {

    const { home_data } = useSelector((state) => state?.home);
    console.log('home', home_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchHomeData());
    }, [dispatch]);

    // const imgUrl = 'https://corefitserver.onrender.com/getbanner/image'

    return (
        <>
            <Layout>


                {/* <!-- Carousel Start --> */}
                <div className="container-fluid p-0">
                    <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {home_data?.data?.map((item, key) => (
                                <div className={`carousel-item ${key === 0 ? 'active' : ''}`} >

                                    {/* <img className="w-100"  src={`${`${imgUrl}`}/${item?.image}`} alt="Image" /> */}
                                    <img className="w-100" src={`https://corefitserver.onrender.com/${item?.image}`} alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h3 className="text-primary text-capitalize m-0">{item?.subtitle}</h3>
                                        <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">{item?.title}</h2>
                                        <Link to="/services" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Join Us Now</Link>
                                    </div>
                                </div>
                            ))}


                        </div>
                        <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
                {/* <!-- Carousel End --> */}



                {/* gym class start */}
                <div className="container gym-class mb-5">
                    <div className="row px-3">
                        <div className="col-md-6 p-0">
                            <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                                <i className="flaticon-six-pack"></i>
                                <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                                <p>

                                    Bodybuilding involves intense resistance training to build and sculpt muscles, enhancing strength, endurance, and overall physique for improved health and aesthetics.
                                </p>
                                <Link to="/services" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                                <i className="flaticon-bodybuilding"></i>
                                <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                                <p>
                                    Muscle building involves resistance training to increase muscle mass, strength, and definition, contributing to overall fitness, health, and aesthetics.
                                </p>
                                <Link to="/services" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gym class end */}

                {/* About start */}
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid mb-4 mb-lg-0" src="img/about4.jpg" alt="Image" style={{height:'450px'}}/>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="display-4 font-weight-bold mb-2">10 Years Experience</h2>
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





                <Trainer />
                <Testimonial />

            </Layout>

        </>
    )
}

export default Home