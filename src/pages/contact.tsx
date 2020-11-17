import * as React from 'react'
import { BrandHeader } from '../components/BrandHeader';
import { Navbar } from '../components/Navbar';
import { MarginContent } from '../components/MarginContent';
import { useEffect } from 'react';
import { BigParagraph } from '../components/BigParagraph';
import { Footer } from '../components/Footer';
import { Helmet } from '../components/Helmet';

import '../style.css';

const Page: React.FC = () => {
  useEffect(() => {
    const decryptCode = `function UnCryptMailto(s){var n = 0;var r = "";for( var i = 0; i < s.length; i++){n = s.charCodeAt( i );if( n >= 8364 ){n = 128;}r += String.fromCharCode( n - 1 );}return r;}function linkTo_UnCryptMailto( s ){location.href=UnCryptMailto( s );}`;
    eval(decryptCode);

    function UnCryptMailto(s: any) {
      let n = 0;
      let r = "";
      for (let i = 0; i < s.length; i++) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
          n = 128;
        }
        r += String.fromCharCode(n - 1);
      }
      return r;
    }

    function linkTo_UnCryptMailto(s: any) {
      location.href=UnCryptMailto(s);
    }

    (window as any).linkTo_UnCryptMailto = linkTo_UnCryptMailto;
  });

  return (
    <div>
      <Helmet title="Yana - Contact" />
      <BrandHeader tiny={true}>
        <Navbar canNavigateToHome />
      </BrandHeader>
      <MarginContent>
        <h1>Contact</h1>
        <BigParagraph>
          If you have encountered issues or bugs, or have a feature request or general feedback, I'd love
          to hear about that on <a href="https://github.com/lukasbach/yana/issues" target="_blank">GitHub Issues</a>.
          Just open a new issue with your problem description or feedback.
        </BigParagraph>
        <BigParagraph>
          For direct requests or messages you'd like to let out without posting it online, feel free to{' '}
          <a href="javascript:linkTo_UnCryptMailto('nbjmup;mcbdiApvumppl/ef');">send me an E-Mail</a>.
        </BigParagraph>
        <BigParagraph>
          You can find out more about my other projects at <a href="https://lukasbach.com" target="_blank">lukasbach.com</a>
        </BigParagraph>
      </MarginContent>
      <Footer />
    </div>
  )
};

export default Page;
