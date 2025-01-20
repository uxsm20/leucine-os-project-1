import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import APSPage from './pages/aps';
import BatchDetails from './pages/aps/batch';
import TaskExecutionPage from './pages/task-execution';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aps" element={<APSPage />} />
        <Route path="/aps/batch/:batchId" element={<BatchDetails />} />
        <Route path="/task-execution" element={<TaskExecutionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
