import './App.css';
import { MainPage } from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GraphPage } from './pages/GraphPage/GraphPage';
import { RepoPage } from './pages/RepoPage/RepoPage';
import { NotFound } from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/graphs/" element={<GraphPage />} />
        <Route path="/repo/:repositoryId" element={<RepoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
