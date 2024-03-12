import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../Common/Layout'
import { FetchServiceData } from '../Redux/ServiceSlice';

const Service = () => {
    const { service_data } = useSelector((state) => state?.service);
    console.log('service', service_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchServiceData());
    }, [dispatch]);

    const getTrainerName = (trainerId) => {
        const Trainer = service_data?.data?.find((service) => service.trainerId === trainerId);
        return Trainer ? (Trainer?.trainer_details[0]?.name) : 'Uncategorized';
    }



    return (
        <>
            <Layout>
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Gym Services</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Gym Services</p>
                        </div>
                    </div>
                </div>

                <div className="container pt-5 team">
                    <div className="d-flex flex-column text-center mb-5">
                        <h3 className="text-primary font-weight-bold">Our Services</h3>
                        <h1 className="display-2 m-0 mt-2 mt-md-4  font-weight-bold text-capitalize">Choose From Our Services</h1>
                    </div>
                    <div className="row" >
                        {service_data?.data?.map((service) => (
                            <div className="col-lg-6 col-md-6 mb-5" key={service.id}>
                                <div className="card border-0 bg-secondary text-center text-white" style={{ minHeight: '450px', minWidth: '450px' }}>
                                    <img className="card-img-top" src={`https://corefitserver.onrender.com/${service?.image}`} alt="" />
                                    <div className="card-social d-flex align-items-center justify-content-center">
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="https://www.linkedin.com/in/deep-kr-guti-19879b211/"><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                    <div className="card-body bg-secondary">
                                        <h2 className="card-title text-primary">{service.service_name}</h2>
                                        <p className="card-text" style={{ fontFamily: 'serif', fontWeight: 700 }}>Trainer:- {getTrainerName(service.trainerId)}</p>
                                        <Link to={`/services-details/${service._id}`} className="btn btn-lg btn-outline-light mt-2 mt-md-4 py-md-2 px-md-4">Explore</Link>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Service