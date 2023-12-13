import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  categories: [],
  users: [],
  // Voeg hier andere initiële staat toe
};

const AppContext = createContext();

const appReducer = (state, action) => {
  // Voeg hier reducer logica toe op basis van acties
  switch (action.type) {
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Voeg hier logica toe om categorieën en gebruikers op te halen
        const categoriesResponse = await fetch('http://localhost:3000/categories');
        const categoriesData = await categoriesResponse.json();

        const usersResponse = await fetch('http://localhost:3000/users');
        const usersData = await usersResponse.json();

        // Dispatch acties om gegevens in de staat op te slaan
        dispatch({ type: 'SET_CATEGORIES', payload: categoriesData });
        dispatch({ type: 'SET_USERS', payload: usersData });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Lege afhankelijkheidsarray betekent dat dit effect maar één keer wordt uitgevoerd bij het mounten

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
