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

  const ContactUs: React.FC = props => (
    <a href="javascript:linkTo_UnCryptMailto('nbjmup;mcbdiApvumppl/ef');">
      { props.children }
    </a>
  );

  return (
    <div>
      <Helmet title="Yana - Contact" />
      <BrandHeader tiny={true}>
        <Navbar canNavigateToHome />
      </BrandHeader>
      <MarginContent>
        <h1>PRIVACY NOTICE</h1>

        <BigParagraph>
          Last updated&nbsp;November 27, 2020
        </BigParagraph>

        <BigParagraph>
          Thank you for choosing to be part of our community at&nbsp;Yana&nbsp;("Company", "we", "us", "our").
          We are committed to protecting your personal information and your right to privacy. If you have any
          questions or concerns about this privacy notice, or our practices with regards to your personal information,
          please <ContactUs>contact us</ContactUs>.
        </BigParagraph>

        <BigParagraph>
          When you&nbsp;use our mobile application,&nbsp;as the case may be (the "App")&nbsp;and more generally, use
          any of our services (the "Services", which include the&nbsp;App and our Website https://yana.js.org), we
          appreciate that you are trusting us with your personal information. We take your privacy very seriously.
          In this privacy notice, we seek to explain to you in the clearest way possible what information we collect,
          how we use it and what rights you have in relation to it. We hope you take some time to read through it
          carefully, as it is important. If there are any terms in this privacy notice that you do not agree with,
          please discontinue use of our Services immediately.
        </BigParagraph>

        <BigParagraph>
          This privacy notice applies to all information collected through our Services (which, as described above,
          includes our&nbsp;App and Website), as well as, any related services, sales, marketing or events.
        </BigParagraph>

        <BigParagraph>
          Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.
        </BigParagraph>

        <h2>WHAT INFORMATION DO WE COLLECT?</h2>

        <h3>Personal information you disclose to us</h3>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;We collect personal information that you provide to us.
        </BigParagraph>

        <BigParagraph>
          We collect personal information that you voluntarily provide to us when you&nbsp;express an interest in
          obtaining information about us or our products and Services, or otherwise when you contact us.
        </BigParagraph>

        <BigParagraph>
          The personal information that we collect depends on the context of your interactions with us and the&nbsp;App,
          the choices you make and the products and features you use.
        </BigParagraph>

        <h3>Information automatically collected</h3>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;Some information — such as your Internet Protocol (IP) address and/or browser and device
          characteristics — is collected automatically when you visit our&nbsp;App. When using the App, you can opt out
          of any information being collected.
        </BigParagraph>

        <BigParagraph>
          We automatically collect certain information when you visit, use or navigate the&nbsp;App. This information
          does not reveal your specific identity (like your name or contact information) but may include device and
          usage information, such as your IP address, browser and device characteristics, operating system, language
          preferences, referring URLs, device name, country, location, information about how and when you use
          our&nbsp;App&nbsp;and other technical information. This information is primarily needed to maintain the
          security and operation of our&nbsp;App, and for our internal analytics and reporting purposes.
        </BigParagraph>

        <BigParagraph>
          See below for details on how to opt out of information being collected.
        </BigParagraph>

        <BigParagraph>
          Like many businesses, we also collect information through cookies and similar technologies.
        </BigParagraph>

        <BigParagraph>
          The information we collect includes:<br />

          <ul>
            <li>
              <em>Log and Usage Data.</em>&nbsp;Log and usage data is service-related, diagnostic, usage and performance
              information our servers automatically collect when you access or use our&nbsp;App&nbsp;and which we
              record in log files. Depending on how you interact with us, this log data may include your IP address,
              device information, browser type and settings and information about your activity in
              the&nbsp;App&nbsp;(such as the date/time stamps associated with your usage, pages and files viewed,
              searches and other actions you take such as which features you use), device event information (such as
              system activity, error reports (sometimes called 'crash dumps') and hardware settings).
            </li>
            <li>
              <em>Device Data.</em>&nbsp;We collect device data such as information about your computer, phone, tablet
              or other device you use to access the&nbsp;App. Depending on the device used, this device data may include
              information such as your IP address (or proxy server), device and application identification numbers,
              location, browser type, hardware model Internet service provider and/or mobile carrier, operating system
              and system configuration information.
            </li>
            <li>
              <em>Location Data.</em>&nbsp;We collect location data such as information about your device's location,
              which can be either precise or imprecise. How much information we collect depends on the type and settings
              of the device you use to access the&nbsp;App. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location (based on your IP address). You can opt out
              of allowing us to collect this information either by refusing access to the information or by disabling
              your Location setting on your device. Note however, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </li>
          </ul>
        </BigParagraph>

        <BigParagraph>
          You can opt out of any information being collected while using the App Yana, by opening the settings of Yana,
          opening the Tab “Advanced” and deselecting the option “Help Yana improve”.
        </BigParagraph>

        <h2>HOW DO WE USE YOUR INFORMATION?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp;We process your information for purposes based on legitimate business interests, the
          fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
        </BigParagraph>

        <BigParagraph>
          We use personal information collected via our&nbsp;App&nbsp;for a variety of business purposes described below.
          We process your personal information for these purposes in reliance on our legitimate business interests, in
          order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal
          obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
        </BigParagraph>

        <BigParagraph>
          We use the information we collect or receive:<br />

          <ul>
            <li>
              For other business purposes.&nbsp;We may use your information for other business purposes, such as data
              analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to
              evaluate and improve our&nbsp;App, products, marketing and your experience. We may use and store this
              information in aggregated and anonymized form so that it is not associated with individual end users
              and does not include personal information. We will not use identifiable personal information without
              your consent.
            </li>
          </ul>
        </BigParagraph>

        <h2>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp; We only share information with your consent, to comply with laws, to provide you with
          services, to protect your rights, or to fulfill business obligations.
        </BigParagraph>

        <BigParagraph>
          We may process or share your data that we hold based on the following legal basis:<br />

          <ul>
            <li>Consent:&nbsp;We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
            <li>Legitimate Interests:&nbsp;We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
            <li>Performance of a Contract:&nbsp;Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
            <li>Legal Obligations:&nbsp;We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
            <li>Vital Interests:&nbsp;We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
          </ul>
        </BigParagraph>

        <BigParagraph>
          More specifically, we may need to process your data or share your personal information in the following
          situations:<br />

          <ul>
            <li>Business Transfers.&nbsp;We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li>Vendors, Consultants and Other Third-Party Service Providers.&nbsp;We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work. Examples include: payment processing, data analysis, email delivery, hosting services, customer service and marketing efforts. We may allow selected third parties to use tracking technology on the&nbsp;App, which will enable them to collect data on our behalf about how you interact with our&nbsp;App&nbsp;over time. This information may be used to, among other things, analyze and track data, determine the popularity of certain content, pages or features, and better understand online activity. Unless described in this notice, we do not share, sell, rent or trade any of your information with third parties for their promotional purposes.&nbsp;We have contracts in place with our data processors, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.</li>
          </ul>
        </BigParagraph>

        <h2>WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp; We only share information with the following third parties.
        </BigParagraph>

        <BigParagraph>
          We only share and disclose your information with the following third parties. We have categorized each party
          so that you may be easily understand the purpose of our data collection and processing practices. If we have
          processed your data based on your consent and you wish to revoke your consent, please contact us using the
          contact details provided in the section below titled "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?".
        </BigParagraph>

        <BigParagraph>
          <ul>
            <li>
              Web and Mobile Analytics
              <br />
              Google Analytics
            </li>
          </ul>
        </BigParagraph>

        <h2>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;We may use cookies and other tracking technologies to collect and store your
          information.
        </BigParagraph>

        <BigParagraph>
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
          information. Specific information about how we use such technologies and how you can refuse certain cookies
          is set out in our Cookie Notice.
        </BigParagraph>

        <h2>HOW LONG DO WE KEEP YOUR INFORMATION?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;We keep your information for as long as necessary to fulfill the purposes outlined in
          this privacy notice unless otherwise required by law.
        </BigParagraph>

        <BigParagraph>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this
          privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or
          other legal requirements). No purpose in this notice will require us keeping your personal information for
          longer than&nbsp;90 days.
        </BigParagraph>

        <BigParagraph>
          When we have no ongoing legitimate business need to process your personal information, we will either delete
          or anonymize such information, or, if this is not possible (for example, because your personal information
          has been stored in backup archives), then we will securely store your personal information and isolate it
          from any further processing until deletion is possible.
        </BigParagraph>

        <h2>HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;We aim to protect your personal information through a system of organizational
          and technical security measures.
        </BigParagraph>

        <BigParagraph>
          We have implemented appropriate technical and organizational security measures designed to protect the
          security of any personal information we process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third
          parties will not be able to defeat our security, and improperly collect, access, steal, or modify your
          information. Although we will do our best to protect your personal information, transmission of personal
          information to and from our&nbsp;App&nbsp;is at your own risk. You should only access the&nbsp;App&nbsp;within
          a secure environment.
        </BigParagraph>

        <h2>WHAT ARE YOUR PRIVACY RIGHTS?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;In some regions, such as the European Economic Area, you have rights that
          allow you greater access to and control over your personal information.&nbsp;You may review, change, or
          terminate your account at any time.
        </BigParagraph>

        <BigParagraph>
          In some regions (like the European Economic Area), you have certain rights under applicable data protection
          laws. These may include the right (i) to request access and obtain a copy of your personal information,
          (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information;
          and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to
          object to the processing of your personal information. To make such a request, please use the&nbsp;contact
          details&nbsp;provided below. We will consider and act upon any request in accordance with applicable data
          protection laws.
        </BigParagraph>

        <BigParagraph>
          If we are relying on your consent to process your personal information, you have the right to withdraw your
          consent at any time. Please note however that this will not affect the lawfulness of the processing before
          its withdrawal, nor will it affect the processing of your personal information conducted in reliance on
          lawful processing grounds other than consent.
        </BigParagraph>

        <BigParagraph>
          If you are a resident in the European Economic Area and you believe we are unlawfully processing your
          personal information, you also have the right to complain to your local data protection supervisory
          authority. You can find their contact details here:&nbsp;
          <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
        </BigParagraph>

        <BigParagraph>
          If you are a resident in Switzerland, the contact details for the data protection authorities are available
          here:&nbsp;<a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
        </BigParagraph>

        <BigParagraph>
          <em>Cookies and similar technologies:</em>&nbsp;Most Web browsers are set to accept cookies by default.
          If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you
          choose to remove cookies or reject cookies, this could affect certain features or services of our&nbsp;App.
          To opt-out of interest-based advertising by advertisers on
          our&nbsp;App&nbsp;visit&nbsp;http://www.aboutads.info/choices/.
          When using the Desktop app, you can manually opt-out by following these steps:
        </BigParagraph>

        <BigParagraph>
          You can opt out of any information being collected while using the App Yana, by opening the settings of Yana,
          opening the Tab “Advanced” and deselecting the option “Help Yana improve”.
        </BigParagraph>

        <h2>CONTROLS FOR DO-NOT-TRACK FEATURES</h2>

        <BigParagraph>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT")
          feature or setting you can activate to signal your privacy preference not to have data about your online
          browsing activities monitored and collected. At this stage no uniform technology standard for recognizing
          and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser
          signals or any other mechanism that automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the future, we will inform you about that
          practice in a revised version of this privacy notice.
        </BigParagraph>

        <h2>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>

        <BigParagraph>
          In Short:&nbsp;&nbsp;Yes, if you are a resident of California, you are granted specific rights regarding
          access to your personal information.
        </BigParagraph>

        <BigParagraph>
          California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are
          California residents to request and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third parties for direct marketing purposes
          and the names and addresses of all third parties with which we shared personal information in the immediately
          preceding calendar year. If you are a California resident and would like to make such a request, please submit
          your request in writing to us using the contact information provided below.
        </BigParagraph>

        <BigParagraph>
          If you are under 18 years of age, reside in California, and have a registered account with&nbsp;the App,
          you have the right to request removal of unwanted data that you publicly post on the&nbsp;App. To request
          removal of such data, please contact us using the contact information provided below, and include the email
          address associated with your account and a statement that you reside in California. We will make sure the
          data is not publicly displayed on the&nbsp;App, but please be aware that the data may not be completely or
          comprehensively removed from all our systems (e.g. backups, etc.).
        </BigParagraph>

        <h2>DO WE MAKE UPDATES TO THIS NOTICE?</h2>

        <BigParagraph>
          <em>In Short:</em>&nbsp;&nbsp;Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </BigParagraph>

        <BigParagraph>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated
          "Revised" date and the updated version will be effective as soon as it is accessible. If we make material
          changes to this privacy notice, we may notify you either by prominently posting a notice of such changes
          or by directly sending you a notification. We encourage you to review this privacy notice frequently to be
          informed of how we are protecting your information.
        </BigParagraph>

        <h2>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>

        <BigParagraph>
          If you have questions or comments about this notice, <ContactUs>you may email us</ContactUs> or contact us
          by post to:
        </BigParagraph>

        <BigParagraph>
          Lukas Bach<br />
          Kaiserstraße 186<br />
          76133 Karlsruhe<br />
          Germany
        </BigParagraph>

        <h2>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>

        <BigParagraph>
          Based on the applicable laws of your country, you may have the right to request access to the personal
          information we collect from you, change that information, or delete it in some circumstances. To request to
          review, update, or delete your personal information, please <ContactUs>contact us</ContactUs>.
          We will respond to your request within 30 days.
        </BigParagraph>

        <BigParagraph>
          This privacy policy was created using&nbsp;Termly’s Privacy Policy Generator.
        </BigParagraph>
      </MarginContent>
      <Footer />
    </div>
  )
};

export default Page;
