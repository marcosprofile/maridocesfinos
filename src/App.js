import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header';
import { MainBody } from './styles/Global.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <MainBody>
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
