import React, { useState } from 'react';
import Header from '../components/Header';
import CompleteSearch from '../components/CompleteSearch';

const AuthorPage = () => {

  const handleArticlesSearch = async (searchTerm) => {}

  return (
    <div>
      <Header />
      <CompleteSearch  onArticlesSearch={handleArticlesSearch} clearLabel={() => {}}/>
    </div>
  );
};

export default AuthorPage;
