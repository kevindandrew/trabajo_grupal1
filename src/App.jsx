import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

export default function App() {
  return (
    <>
    
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}
