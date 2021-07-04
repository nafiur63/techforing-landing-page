import React from 'react'
import Banner from '../Components/Banner'
import Companies from '../Components/Companies'
import CustomerSay from '../Components/CustomerSay'
import Footer from '../Components/Footer'
import FreeTrial from '../Components/FreeTrial'
import FullScan from '../Components/FullScan'
import Header from '../Components/Header'
import Numbers from '../Components/Numbers'
import Resources from '../Components/Resources'
import ThirdEyeFeatures from '../Components/ThirdEyeFeatures'
import ThirdEyeLooks from '../Components/ThirdEyeLooks'

const HomePage = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <Companies/>
        <FullScan/>
        <ThirdEyeLooks/>
        <Numbers/>
        <ThirdEyeFeatures/>
        <CustomerSay/>
        <FreeTrial/>
        <Resources/>
        
        <Footer/>
        </>
    )
}

export default HomePage
