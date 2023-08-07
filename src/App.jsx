import { useContext, useState } from 'react'
import NavigationContainer from './components/NavigationContainer'
import { createContext } from 'react'
import HomeContainer from './components/HomeContainer';
import React from 'react';
import WorkContainer from './components/WorkContainer';
import AboutContainer from './components/AboutContainer';

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme]= useState("Dark");
  const toggleTheme = ()=>{
    setTheme ((curr) => (curr =="Light" ? "Dark" :"Light"));
  };
  return (
    <ThemeContext.Provider value= {{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <NavigationContainer theme={theme} toggleTheme={toggleTheme}/>
      <HomeContainer id="home" theme={theme}/>
      <WorkContainer />
      <AboutContainer />
      </div>
      </ThemeContext.Provider>
  );
};

export default App

  