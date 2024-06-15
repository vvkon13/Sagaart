import React from 'react';
import style from './app.module.css';

function App() {
  return (
    <div className={style.app}>
      <header className={style.app__header}>
        <p>
          Edit<code>src/app.js</code> and save to reload.
        </p>
        <a
          className={style.app__link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello GP
        </a>
      </header>
    </div>
  );
}

export default App;
