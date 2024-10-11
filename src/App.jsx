import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Albums from './pages/Albums';
import TaskList from './pages/TaskList'; 
import Posts from './pages/Posts'; 
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<TaskList />} /> 
        <Route path="/posts" element={<Posts />} /> 
      </Routes>
    </>
  );
}
