import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Novo from './pages/Novo';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/produtos/novo' element={<Novo />} />
            <Route path="/produtos/:id/editar" element={<Edit />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
