import React, { useState } from 'react'
import Layout from '../Common/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FetchContactData } from '../Redux/ContactSlice';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  
    const handleSubmit =  (e) => {
      e.preventDefault();
      // dispatch(FetchContactData( {name, email, phone, message} ))
      try {
        const res = dispatch(FetchContactData( {name, email, phone, message} ))
        //console.log(res);
        if (res && res?.data?.success) {
  
            toast.success(res?.data && res?.data?.message);
            navigate("/contact");
        } 
  
    } catch (error) {
        console.log(error);
        //toast.error(error.data.message);
        toast.error("Something went wrong");
    }
  
    };
  return (
    <>
    <Layout>
    <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Contact</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Contact</p>
                        </div>
                    </div>
                </div>

    <div className="container pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-primary font-weight-bold">Get In Touch</h4>
                <h4 className="display-4 font-weight-bold">Email Us For Any Query</h4>
            </div>
            <div className="row px-3 pb-2">
                <div className="col-sm-4 text-center mb-3">
                    <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                    <h4 className="font-weight-bold">Address</h4>
                    <p>123 Street, New York, USA</p>
                </div>
                <div className="col-sm-4 text-center mb-3">
                    <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                    <h4 className="font-weight-bold">Phone</h4>
                    <p>+012 345 6789</p>
                </div>
                <div className="col-sm-4 text-center mb-3">
                    <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                    <h4 className="font-weight-bold">Email</h4>
                    <p>info@example.com</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 pb-5">
                    <iframe
                        title="Google Map"
                        style={{ width: '100%', height: '392px' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameBorder="0"
                        
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="col-md-6 pb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" noValidate="novalidate" onSubmit={handleSubmit}>
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email"  value={email} onChange={(e) => setEmail(e.target.value)} required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}  required="required" data-validation-required-message="Please enter a Phone" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="6" id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">
                                    Send Message
                                </button>
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

export default Contact