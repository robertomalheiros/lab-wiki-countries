import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/template/NavBar';
import Home from './components/template/Home';
import Footer from './components/template/Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
