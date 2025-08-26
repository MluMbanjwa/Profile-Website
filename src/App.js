import Header from './components/Header'
import Education from './components/Education'
import Contacts from './components/Contact'
import Projects from './components/Projects'
import Specialist from './components/Specialist'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './css/style.css'

function App() {
  return ( 
    <BrowserRouter>
    <Header />
        <Routes >
          <Route  path='/' element={<Specialist />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='*' element={<Specialist />} />
        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
