import React, { useState } from 'react';
import web1Image from './images/web1.jpeg';
import web2Image from './images/web2.jpeg';
import web3Image from './images/web3.jpeg';
import web4Image from './images/web4.jpeg';

const PetAdoptionPageSelector = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const websites = [
    {
      name: 'clay',
      image: web1Image,
      url: 'https://www.petfinder.com/dog/clay-69813767/ca/coarsegold/innocent-angels-sanctuary-ca3057/',
    },
    {
      name: 'Matt',
      image: web2Image,
      url: 'https://www.petfinder.com/dog/matt-69747290/ca/coarsegold/innocent-angels-sanctuary-ca3057/',
    },
    {
      name: 'keiser',
      image: web3Image,
      url: 'https://www.petfinder.com/dog/keiser-69747076/ca/coarsegold/innocent-angels-sanctuary-ca3057/',
    },
    {
      name: 'Jacob',
      image: web4Image,
      url: 'https://www.petfinder.com/dog/jacob-69545267/ca/coarsegold/innocent-angels-sanctuary-ca3057/',
    },
    // Add more websites as needed
  ];

  const openWebsite = (url) => {
    window.open(url, '_blank');
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredWebsites = websites.filter((website) =>
    website.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h3 align="center">Pet Adoption Page Selector</h3>
      {/* <p align="center">Select a website for pet adoption:</p> */}

      <div align="center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: '500px', padding: '8px' }}
        />
      </div>

      <div className="websites-container">
        {filteredWebsites.map((website, index) => (
          <div key={index} className="website-card">
            <img
              src={website.image}
              alt={website.name}
              className="website-image"
              style={{ height: '200px', width: 'auto' }} // Set fixed height
            />
            <h3>{website.name}</h3>
            <button onClick={() => openWebsite(website.url)}>Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetAdoptionPageSelector;
