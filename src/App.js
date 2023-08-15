import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import { MainBody } from './styles/Global.styled';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <MainBody>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<List />} />
          </Routes>
        </MainBody>
      </Router>
    </ThemeProvider>
  );
}

export default App;
