import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './styles/bootstrap.css'
import './styles/index.css'
import Layout from './components/Layout'
import customTheme from './components/customTheme'
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
  

    <div className="App">
      <ThemeProvider theme={customTheme}>
          <Layout/>
    </ThemeProvider>
    
    </div>
  );
}

export default App;
