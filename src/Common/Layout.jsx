import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import NavBar from './Navbar'

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <meta charSet='UTF-8' />

        {/* <title>{title}</title> */}
      </Helmet>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

// Layout.defaultProps = {
//     title: "Crud",
// }

export default Layout
