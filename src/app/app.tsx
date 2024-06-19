import React from 'react';
import style from './app.module.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';
import Main from '../pages/main/ui/main';

function App() {
  return (
      <div className={style.app}>
          <Header />
          <Main />
          <Footer />
      </div>
  );
}

export default App;
