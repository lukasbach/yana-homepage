import * as React from 'react'
import { Helmet } from '../components/Helmet';
import { BrandHeader } from '../components/BrandHeader';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MarginContent } from '../components/MarginContent';
import GatsbyLink from 'gatsby-link';

const NotFoundPage = () => (
  <div>
    <Helmet title="Yana - 404" />
    <BrandHeader tiny={true}>
      <Navbar canNavigateToHome />
    </BrandHeader>
    <MarginContent>
      <h1>404 - Content not found</h1>
      <p>
        <GatsbyLink to="/">Go back to home</GatsbyLink>
      </p>
    </MarginContent>
    <Footer />
  </div>
)

export default NotFoundPage
