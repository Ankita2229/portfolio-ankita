import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import HomePage from './pages/HomePage';
import MicroservicesProject from './pages/projects/MicroservicesProject';
import AIMarketIntelligence from './pages/projects/AIMarketIntelligence';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/enterprise-microservices" element={<MicroservicesProject />} />
          <Route path="/projects/ai-market-intelligence" element={<AIMarketIntelligence />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;