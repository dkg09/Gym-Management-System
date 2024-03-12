import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
            <div className="row pt-5">
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-primary mb-4">Get In Touch</h4>
                    <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                    <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-primary mb-4">Quick Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <Link to="/" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                        <Link to="/about" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</Link>
                        <Link to="/features" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Features</Link>
                        <Link to="/blog" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Blog</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-primary mb-4">Popular Links</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <Link to="/login" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Member Login</Link>
                        <Link to="/register" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Register</Link>
                        <Link to="/services" className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</Link>
                        <Link to="/contact" className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>

              
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="text-primary mb-4">Opening Hours</h4>
                    <h5 className="text-white">Monday - Friday</h5>
                    <p>8.00 AM - 8.00 PM</p>
                    <h5 className="text-white">Saturday - Sunday</h5>
                    <p>2.00 PM - 8.00 PM</p>
                </div>
            </div>
            <div className="container border-top border-dark pt-5">
                <p className="m-0 text-center text-white">
                    &copy; <a className="text-white font-weight-bold" href="#">Gym</a>. All Rights Reserved. Designed by
                    <a className="text-white font-weight-bold" href='www.linkedin.com/in/deep-kr-guti-19879b211'>Deep Kumar Guti</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
