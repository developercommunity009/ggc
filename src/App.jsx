import React from 'react'
import Navbar from './components/Navbar';
import Banner from './sections/Banner/Banner';
import RegulatedFunds from './sections/RegulatedFunds/RegulatedFunds';
import InvestmentObjectives from './sections/InvestmentObjectives/InvestmentObjectives';
import ExpertSupport from './sections/ExpertSupport/ExpertSupport';
import AMCDef from './sections/AMCDef/AMCDef';
import CapitalProtected from './sections/CapitalProtected/CapitalProtected';
import InnovotiveTrading from './sections/InnovotiveTrading/InnovotiveTrading';
import InvestmentUniverse from './sections/InvestmentUniverse/InvestmentUniverse';
import Portfolio from './sections/Portfolio/Portfolio';
import HowInvest from './sections/HowInvest/HowInvest';
import Roadmap from './sections/Roadmap/Roadmap';
import Token from './sections/Token/Token';
import Tokenomics from './sections/Tokenomics/Tokenomics';
import Team from './sections/Team/Team';
import FAQ from './sections/FAQ/FAQ';
import HelpSection from './sections/HelpSection/HelpSection';
import Footer from './sections/Footer/Footer';
import Suggestion from './sections/Suggestion/Suggestion';
import { Route,Routes } from 'react-router-dom';
import Register from './sections/Form/Register';

const App = () => {
  try {
    return (
      
      <div className='max-w-[100vw] overflow-hidden'>
   
        <Navbar />
       
        
      
        
        <Banner />
        <RegulatedFunds />
        {/* <InvestmentObjectives /> */}
        {/* <ExpertSupport /> */}
        {/* <AMCDef /> */}
        {/* <CapitalProtected /> */}
        {/* <InnovotiveTrading /> */}
        {/* <InvestmentUniverse /> */}
        <HowInvest />
        <Portfolio />

        {/* <Roadmap /> */}
        {/* <Suggestion /> */}
        <Token />
        {/* <Tokenomics /> */}
        {/* <Team /> */}
        <FAQ />
        <HelpSection />
        <Footer />
        
       
      </div>
      
    );
  } catch (error) {
    console.error(error);
    return <div>Import error: {error.message}</div>;
  }
}

export default App