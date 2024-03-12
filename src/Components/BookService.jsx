import React, { useEffect, useState } from 'react'
import Layout from '../Common/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { booking } from '../Redux/BookingSlice';
import { FetchBookingDetails } from '../Redux/DashBoardSlice';
import { FetchServiceDetailsData } from '../Redux/ServiceDetailsSlice';

const BookService = () => {
    const { servicedetails_data } = useSelector((state) => state?.servicedetails);
    console.log(servicedetails_data?.data?.data?.bookings);
    const { _id } = useParams();

    const dispatch = useDispatch();
    const name = localStorage.getItem('name');
    const memberId = localStorage.getItem('_id');
    const email = localStorage.getItem('email');
    const serviceName = servicedetails_data?.data?.data.service_name
    console.log(serviceName);
    const [scheme, setScheme] = useState();
    // const [service_name, setServiceName] = useState();
    const [price, setPrice] = useState('0');
    const serviceId = _id
    console.log(memberId, "price")

    useEffect(() => {
        if (serviceId) {
            switch (scheme) {
                case "Yearly":
                    setPrice("12000");
                    break;
                case "Half-yearly":
                    setPrice("8000");
                    break;
                case "Quarterly":
                    setPrice("3500");
                    break;
                default:
                    setPrice("0")
            }
        }
    }, [scheme, price]);

    useEffect(() => {
        dispatch(FetchServiceDetailsData(_id));
    }, [_id]);


    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(booking({ name, email, scheme, price, serviceId, memberId }));

        dispatch(FetchBookingDetails(memberId));
        // navigate(`/dashboard`);
        navigate(`/dashboard/${memberId}`)
    }
    return (
        <>
            <Layout>
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Book Service</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Book Service</p>
                        </div>
                    </div>
                </div>

                <div className="container gym-class mb-5 mt-5 ">
                    <div className="row px-3 ">
                        <div className="col-md-6 p-0">
                            <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                                <i className="flaticon-six-pack"></i>
                                <h1 className="display-4 mb-3 text-white font-weight-bold" style={{ minHeight: '254px' }}>Connect with Us to Achieve Ultimate Success  </h1>
                                <p className='font-weight-bold' >

                                    Unlock your path to ultimate success with our premium gym services. Join us to experience tailored workout plans, state-of-the-art equipment, and expert guidance.
                                    Connect with our fitness community, pushing your limits and achieving unparalleled results.
                                    Elevate your fitness journey—transforming aspirations into accomplishments. Your success story starts with us.

                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="gym-class-box d-flex flex-column align-items-start justify-content-center  text-left " >
                                <i className="flaticon-bodybuilding"></i>
                                <h3 className="display-4 mb-3  font-weight-bold">Book Your Service Today</h3>
                                <h4 className=" mb-4" > Start Your  <span className='text-primary text-capitalize m-0'>{serviceName} </span> Journey </h4>

                                <form style={{ minWidth: '500px' }} onSubmit={(e) => handleSubmit(e)}>

                                    <div className="form-row">
                                        <div className="control-group">
                                            <input type="hidden" value={memberId} readOnly className="form-control" id="name" placeholder="Your Name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="col form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg "
                                                placeholder="Name"
                                                value={name} readOnly
                                            />
                                        </div>
                                        <p className="help-block text-danger"></p>

                                    </div>
                                    <div className="form-row">
                                        <div className="control-group">
                                            <input type="hidden" value={memberId} readOnly className="form-control" id="name" placeholder="Your Name" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg "
                                                placeholder="Email"
                                                value={email} readOnly
                                            />
                                            <p className="help-block text-danger"></p>


                                        </div>
                                    </div>
                                    <div className="form-row">

                                        <div className="control-group">
                                            <input type="hidden" value={servicedetails_data?.data?.data?._id} name='serviceId' className="form-control" id="training" placeholder="Your Training" />
                                            <p className="help-block text-danger"></p>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        {/* </div> */}
                                        {/* <div className="form-row"> */}

                                        <div className="col form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg "
                                                placeholder="service"
                                                value={servicedetails_data?.data?.data?.service_name} />
                                            <p className="help-block text-danger"></p>

                                        </div>
                                    </div>

                                    <div className="form-row">

                                        <div className="col form-group">
                                            <select className="form-control mb-2"
                                                name="scheme"
                                                value={scheme}
                                                onChange={(e) => setScheme(e.target.value)}>
                                                <option value="" >Select Your Scheme</option>
                                                <option value="Yearly">Yearly</option>
                                                <option value="Half-yearly">Half-yearly</option>
                                                <option value="Quarterly">Quarterly</option>
                                            </select>
                                            <p className="help-block text-danger"></p>


                                        </div>
                                    </div>

                                    <div className="form-row">

                                        <div className="col form-group">
                                            <input
                                                type="text"
                                                name='price'

                                                className="form-control form-control-lg "
                                                placeholder="price"
                                                value={price}

                                            />

                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Book Now</button>


                                        {/* <div className="col">
                                            <input
                                                type="button"
                                                className="btn btn-lg btn-block btn-dark border-light"
                                                value="Register"
                                            />
                                        </div> */}
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}

export default BookService