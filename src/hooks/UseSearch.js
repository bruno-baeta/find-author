import { useState, useEffect } from 'react';
import { fetchAuthors } from '../services/AuthorService';

const useSearch = (debounceTime = 500) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const fetchResults = debounce(async (term) => {
    if (!term) return;
    setLoading(true);
    try {
      const data = await fetchAuthors(term); 
      setResults(data);
    } catch (error) {
      console.error('Erro na busca:', error);
    } finally {
      setLoading(false);
    }
  }, debounceTime);

  useEffect(() => {
    fetchResults(searchTerm);
  }, [searchTerm]);

  return { searchTerm, setSearchTerm, results, loading };
};

export default useSearch;
