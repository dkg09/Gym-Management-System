import React, { useEffect, useState } from 'react'
import Layout from '../Common/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogData } from '../Redux/BlogSlice';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { blog_data } = useSelector((state) => state?.blog);
    console.log('blog', blog_data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchBlogData());
    }, [dispatch]);


    const [visible, setVisible] = useState(4)
    const showMore = () => {
        setVisible((prev) => prev + 4)
    }


    return (
        <>
            <Layout>
                <div className="container-fluid page-header mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Blog</h4>
                        <div className="d-inline-flex">
                            <p className="m-0 text-white"><Link className="text-white" to="/">Home</Link></p>
                            <p className="m-0 text-white px-2">/</p>
                            <p className="m-0 text-white">Blog</p>
                        </div>
                    </div>
                </div>



                <div className="container pt-5">
                    <div className="d-flex flex-column text-center mb-5">
                        <h4 className="text-primary font-weight-bold">Our Blog</h4>
                        <h4 className="display-4 font-weight-bold">Latest Article From Blog</h4>
                    </div>
                    <div className="row">
                        {

                            blog_data?.data?.slice(0, visible).map((item, key) => {
                                return (
                                    <>
                                        <div className="col-lg-6 mb-5 blog-item">
                                            <img className="img-fluid mb-4" src={`https://corefitserver.onrender.com/${item?.image}`} style={{ minHeight: '400px' }} alt="Image" />
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: '80px', height: '80px' }}>
                                                    <small>01</small>
                                                    <strong className="text-uppercase m-0 text-white">Jan</strong>
                                                    <small>2045</small>
                                                </div>
                                                <div className="pl-3">
                                                    <div className="d-flex">
                                                        <h3 className="font-weight-bold">{item?.title}</h3>

                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-primary text-capitalize m-0">{item?.subtitle}</h3><br />
                                            <p className="font-weight-bold" style={{ minHeight: '50px' }}>{item?.content.slice(0,85)}{`...`}</p>

                                            <Link to={`/blog-details/${item._id}`} className="btn btn-outline-primary mt-2 px-3" href="">Read More <i className="fa fa-angle-right"></i></Link>
                                            {/* <Link to={`/blogDetails/${item._id}`} className="btn btn-outline-primary mt-2 px-3" href="">Read More<i className="fa fa-angle-right"></i></Link> */}
                                        </div>
                                    </>
                                )


                            })}

                        <div className="col-lg-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center mb-4">
                                    {visible < blog_data?.data?.length &&
                                        <button className="btn btn-lg px-4 btn-outline-primary" onClick={showMore}>Show More</button>}

                                </ul>


                            </nav>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Blog