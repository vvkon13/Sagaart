import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/app';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from '@gravity-ui/uikit';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ThemeProvider theme="light">
                    <App />
                </ThemeProvider>,
            </Router>
        </Provider>
    </React.StrictMode>,
);