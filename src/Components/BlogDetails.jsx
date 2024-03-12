import React, { useEffect } from 'react'
import Layout from '../Common/Layout'
import { FetchBlogDetailsData } from '../Redux/BlogDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { _id } = useParams()
    const { blogdetails_data } = useSelector((state) => state?.blogdetails);
    console.log('blogdetails', blogdetails_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchBlogDetailsData(_id));
    }, [dispatch]);
    return (
        <>
            <Layout>
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Blog Details</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Blog Details</p>
                        </div>
                    </div>
                </div>


                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <img className="img-fluid mb-4" src={`https://corefitserver.onrender.com/${blogdetails_data?.image}`} style={{ minWidth: '750px' }} alt="Image" />
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: '100px', height: '100px' }}>
                                    <span>10</span>
                                    <strong className="text-uppercase m-0 text-white">Oct</strong>
                                    <span>2045</span>
                                </div>
                                <div className="pl-3">
                                    <div className="d-flex">
                                        {/* <h1 className="font-weight-bold mb-3 text-uppercase">{blogdetails_data?.data?.data.title}</h1> */}
                                        <p className=" display-4 mb-3 mt-0  font-weight-bold" style={{ fontFamily: 'serif', maxWidth: '600px' }}>  {blogdetails_data?.data?.data.title}</p>


                                    </div>


                                </div>
                            </div>
                            <div className="col-sm-10">
                                <h2 className=" font-weight-bold text-primary text-capitalize  ">{blogdetails_data?.data?.data.subtitle} {`==>`} </h2><br />
                            </div>

                            {/* <p className=" display-4 mb-3 mt-0  font-weight-bold" style={{ fontFamily: 'serif', maxWidth:'800px' }}> {blogdetails_data?.data?.data.content} </p> */}
                            <h2 className="font-weight-bold mb-3" style={{ maxWidth: '780px' }}>{blogdetails_data?.data?.data.content}</h2>

                        </div>


                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogDetails