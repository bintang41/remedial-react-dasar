import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage';
import CredentialsListPages from './pages/CredentialsListPages';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credentials" element={<CredentialsListPages />} />
        <Route path="/credentials/add" element={<h1>Add New Credentials Page</h1>} />
        <Route path="/credentials/:id/edit" element={<h1>HomePage</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
