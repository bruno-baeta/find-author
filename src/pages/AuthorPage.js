import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';

const AuthorPage = () => {
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = (term) => {
    setSearchResult(`Resultados para: ${term}`);
  };

  return (
    <div>
      <Header />
      <SearchBox onSearch={handleSearch} />
      <p>{searchResult}</p>
    </div>
  );
};

export default AuthorPage;
