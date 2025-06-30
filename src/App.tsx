// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';

// Corporate
import CorporateOverview from './pages/Corporate/Overview';
import CorporateServices from './pages/Corporate/CorporateServices';
import CorporateFaq from './pages/Corporate/Faq';

// Individual
import IndividualOverview from './pages/Individual/Overview';
import IndividualServices from './pages/Individual/IndividualServices';
import IndividualFaq from './pages/Individual/Faq';

// About
import WhyMueen from './pages/About/WhyMueen';
import LicensesCertifications from './pages/About/LicensesCertifications';
import Commitment from './pages/About/Commitment';
import ChairmansMessage from './pages/About/ChairmansMessage';
import CEOsMessage from './pages/About/CEOsMessage';

// Media Center
import CorporateProfile from './pages/MediaCenter/CorporateProfile';
import Blogs from './pages/MediaCenter/Blogs';
import EServices from './pages/EServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="e-services" element={<EServices />} />

          {/* Corporate */}
          <Route path="corporate/overview" element={<CorporateOverview />} />
          <Route path="corporate/services" element={<CorporateServices />} />
          <Route path="corporate/faq" element={<CorporateFaq />} />
          
          {/* Individual */}
          <Route path="individual/overview" element={<IndividualOverview />} />
          <Route path="individual/services" element={<IndividualServices />} />
          <Route path="individual/faq" element={<IndividualFaq />} />

          {/* About */}
          <Route path="about/why-mueen" element={<WhyMueen />} />
          <Route path="about/licenses" element={<LicensesCertifications />} />
          <Route path="about/commitment" element={<Commitment />} />
          <Route path="about/chairman-message" element={<ChairmansMessage />} />
          <Route path="about/ceo-message" element={<CEOsMessage />} />

          {/* Media Center */}
          <Route path="media/profile" element={<CorporateProfile />} />
          <Route path="media/blogs" element={<Blogs />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
