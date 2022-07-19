import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('iphone reviews');

  const getResults = async (url) => {

    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ce8555be52msh67e14848af752cep1a159cjsnef537087f084',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      },
    });

    const data = await res.json();

    if (url.includes('/news')) {
      setResults(data.entries)
    } else if (url.includes('/image')){
      setResults(data.image_results)
    }else{
      setResults(data.results)
    }
    
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);