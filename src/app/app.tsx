import React from 'react';
import style from './app.module.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
