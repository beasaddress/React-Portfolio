//WHEN I load the portfolio the first time
//THEN the About Me title and section are selected by default

//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Home() {
    const[currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <ContactMe />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Resume />;
      };
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
        <div>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );

}

