import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectsPage from './pages/projects';
import HomePage from './pages/home';
import ExperiencesPage from './pages/experiences';
import ProjectDetailsPage from './pages/project';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:projectID" element={<ProjectDetailsPage/>} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;