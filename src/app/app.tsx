import React from 'react';
import style from './app.module.css';
import Header from '../widgets/header';
import Footer from '../widgets/footer';

import { FormSignupFeature } from '../features/form-signup/form-signup';


function App() {
  return (
      <div className={style.app}>
          <Header />
          <FormSignupFeature />
          <Footer />
      </div>
  );
}

export default App;
