import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ApplicationProcess from './pages/ApplicationProcess';
import Contact from './pages/Contact';
import UNConvention from './pages/UNConvention';
import LawsInfo from './pages/LawsInfo';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/application" element={<ApplicationProcess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/un-convention" element={<UNConvention />} />
            <Route path="/laws" element={<LawsInfo />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;