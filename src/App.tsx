import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import HomePage from './pages/HomePage';
import MicroservicesProject from './pages/projects/MicroservicesProject';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/enterprise-microservices" element={<MicroservicesProject />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;