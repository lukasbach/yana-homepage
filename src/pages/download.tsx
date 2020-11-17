import * as React from 'react'
import { BrandHeader } from '../components/BrandHeader';
import { Navbar } from '../components/Navbar';
import { LatestVersionSection } from '../components/downloads/LatestVersionSection';
import { AllVersionsSection } from '../components/downloads/AllVersionsSection';
import { Footer } from '../components/Footer';
import { Helmet } from '../components/Helmet';

import '../style.css';

const Page: React.FC = () => {
  return (
    <div>
      <Helmet title="Yana - Download" />
      <BrandHeader tiny={true}>
        <Navbar canNavigateToHome />
      </BrandHeader>
      <LatestVersionSection />
      <AllVersionsSection />
      <Footer />
    </div>
  )
};

export default Page;
