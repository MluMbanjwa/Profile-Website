import Header from './components/Header'
import Education from './components/Education'
import Contacts from './components/Contact'
import Projects from './components/Projects'
import Specialist from './components/Specialist'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './css/style.css'

function App() {
  return (
    <div className="page">
    <BrowserRouter>
    <div><Header/></div>
    <Routes>
      <Route path='/' element={<div><Specialist/></div>}/>
      <Route path="/Education" element={<div><Education/></div>}/>
      <Route path='/Contacts' element={<div><Contacts/></div>}/>
      <Route path='/Projects' element={<div><Projects/></div>}/>
      <Route path="*" element={<div><h2>Page Not Found</h2></div>} />
    </Routes>
    </BrowserRouter> 
</div>
  );
}

export default App;
