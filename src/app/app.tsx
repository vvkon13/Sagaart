import React from 'react';
import style from './app.module.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Catalog from '../pages/catalog/ui/catalog';

function App() {
  return (
      <div className={style.app}>
          <Header />
          <Catalog />
          <Footer />
      </div>
  );
}

export default App;
