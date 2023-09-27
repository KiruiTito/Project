// Header.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Implement your search logic here based on searchQuery
    // Update the searchResults state with the results
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul>
            {/* ... Your navigation links ... */}
          </ul>
          <div className='start'>
            <button onClick={() => setShowSearch(true)}>
              <i className='fa fa-search'></i>
            </button>
            <div className='button'>SEARCH</div>
          </div>
        </nav>
      </header>

      {/* Search overlay */}
      {showSearch && (
        <div className='search-overlay'>
          <div className='search-container'>
            <input
              type='text'
              placeholder='Search for schools...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={() => setShowSearch(false)}>Close</button>
          </div>
          <div className='search-results'>
            {/* Display search results here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
