import React from 'react';
import './App.css';
import HeaderContent from "./components/HeaderContent"
import CheckList from './components/CheckList'
import FooterContent from './components/FooterContent';

const App = () => 
    <div>
      <HeaderContent />
      <CheckList />
      <FooterContent />
    </div>

export default App;
