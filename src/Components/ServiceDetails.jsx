import React, { useEffect } from 'react'
import { FetchServiceDetailsData } from '../Redux/ServiceDetailsSlice';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Common/Layout';

const ServiceDetails = () => {
    const { _id } = useParams()
    const { servicedetails_data } = useSelector((state) => state?.servicedetails);
    console.log('servicedetails', servicedetails_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchServiceDetailsData(_id));
    }, [dispatch]);

    // const getTrainerName = (trainerId) => {
    //     const Trainer = service_data?.data?.find((service) => service.trainerId === trainerId);
    //     return Trainer ? (Trainer?.trainer_details[0]?.name) : 'Uncategorized';
    // }

    return (
        <>
            <Layout>

                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Service Details</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Service Details</p>
                        </div>
                    </div>
                </div>


                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: '100px', height: '100px' }}>
                                    <span>01</span>
                                    <strong className="text-uppercase m-0 text-white">Jan</strong>
                                    <span>2045</span>
                                </div>
                                <div className="pl-3">
                                    <h1 className="font-weight-bold mb-3" style={{ fontWeight: '700' }}>{servicedetails_data?.data?.data.service_name}</h1>

                                    {/* <p className="card-text" style={{fontFamily:'serif', fontWeight:700}}>Trainer:- {getTrainerName(service.trainerId)}</p> */}


                                </div>
                            </div>

                            <img className="w-50 float-left mr-4 mb-3" src={`https://corefitserver.onrender.com/${servicedetails_data?.data?.data.image}`} alt="Image" />
                            <p className="font-weight-bold" style={{ fontFamily: 'serif' }}>{servicedetails_data?.data?.data.service_description}</p>

                            <Link to={`/joining/${servicedetails_data?.data?.data._id}`} className="btn btn-lg px-4 btn-outline-primary">Join Now</Link>
                        </div>


                    </div>
                </div>
            </Layout>

        </>
    )
}

export default ServiceDetails