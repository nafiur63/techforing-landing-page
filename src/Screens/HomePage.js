import React from 'react'
import Banner from '../Components/Banner'
import Companies from '../Components/Companies'
import FreeTrial from '../Components/FreeTrial'
import FullScan from '../Components/FullScan'
import Header from '../Components/Header'

const HomePage = () => {
    return (
        <>
        <Header/>
        <Banner/>
        <Companies/>
        <FullScan/>
        <FreeTrial/>
        </>
    )
}

export default HomePage
