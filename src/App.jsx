import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import TaskList from './pages/TaskList'; // Importa el componente TaskList

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<TaskList />} /> {/* Nueva ruta para TaskList */}
        <Route path="/albums/:albumId/photos" element={<Photos />} />
      </Routes>
    </>
  );
}
