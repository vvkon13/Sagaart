import React from 'react';
import style from './app.module.css';
import Header from '../widgets/header';

function App() {
  return (
    <div className={style.app}>
      <Header />
    </div>
  );
}

export default App;
