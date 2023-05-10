import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';
import { ruRU } from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme(ruRU);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
