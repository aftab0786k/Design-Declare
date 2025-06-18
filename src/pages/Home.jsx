import React from 'react'
import DesignDeclares from '../components/DesignDeclares'
import BreakDown from './BreakDown'
import DonateToD from '../components/DonateToD'
import EightActsSection from '../components/EightActsSection'
import DeclareEmergency from '../components/DeclareEmergency'
import ExpandBar from '../components/ExpandBar'
import LatestEvents from '../components/LatestEvents'
import NavigationMenu from '../components/NavigationMenu'
import NewsletterSection from '../components/NewsletterSection'
import Signatories from './Signatories'
import GlobalSupporters from './GlobalSupporter'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <ExpandBar />
        <NavigationMenu />
        <DesignDeclares />
        <BreakDown />
        <DonateToD />
        <EightActsSection />
        <DeclareEmergency />
        <LatestEvents />
        <NewsletterSection />
        <Signatories />
        <GlobalSupporters />
        <Footer />
    </>
  )
}

export default Home
