import React from 'react'
import Header from '../views/Header'
import Footer from '../views/Footer'
import '../assets/styles/App.scss';
const Layout = ({ children }) => (
    <div className= "App">

        <Header/>
        { children }
        <Footer/>
    </div>
)

export default Layout;