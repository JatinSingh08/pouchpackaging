import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <Routes>
        <Route path='/' 
        element={
          <Layout>
            <Home />
          </Layout>
        } 
        />
        <Route path='/about' 
        element={
          <Layout>
            <About />
          </Layout>
        } />
    </Routes>
  )
}

export default App
